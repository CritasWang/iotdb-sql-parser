import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { RelationalSqlLexer } from '../../lib/iotdb-table/RelationalSqlLexer';
import { ProgramContext, RelationalSqlParser } from '../../lib/iotdb-table/RelationalSqlParser';
import { BasicSQL } from '../common/basicSQL';
import {
    Suggestions,
    EntityContextType,
    SyntaxSuggestion,
    CaretPosition,
    SemanticCollectOptions,
} from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { ErrorListener } from '../common/parseErrorListener';
import { IoTDBTableEntityCollector } from './iotdbTableEntityCollector';
import { IoTDBTableErrorListener } from './iotdbTableErrorListener';
import { IoTDBTableSqlSplitListener } from './iotdbTableSplitListener';
import { IoTDBTableSemanticContextCollector } from './iotdbTableSemanticContextCollector';

export { IoTDBTableEntityCollector, IoTDBTableSqlSplitListener };

export class IoTDBTableSQL extends BasicSQL<
    RelationalSqlLexer,
    ProgramContext,
    RelationalSqlParser
> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new RelationalSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new RelationalSqlParser(tokenStream);
    }

    protected get splitListener() {
        return new IoTDBTableSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): IoTDBTableErrorListener {
        return new IoTDBTableErrorListener(_errorListener, this, this.preferredRules);
    }

    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new IoTDBTableEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new IoTDBTableSemanticContextCollector(input, caretPosition, allTokens, options);
    }

    protected preferredRules: Set<number> = new Set([
        RelationalSqlParser.RULE_createDbStatement,
        RelationalSqlParser.RULE_createTableStatement,
        RelationalSqlParser.RULE_createViewStatement,
        RelationalSqlParser.RULE_createFunctionStatement,
        RelationalSqlParser.RULE_qualifiedName,
        RelationalSqlParser.RULE_identifier,
        RelationalSqlParser.RULE_columnDefinition,
        RelationalSqlParser.RULE_viewColumnDefinition,
    ]);

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const tokenRanges = allTokens.slice(candidateRule.startTokenIndex, caretTokenIndex + 1);

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case RelationalSqlParser.RULE_createDbStatement: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case RelationalSqlParser.RULE_createTableStatement: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case RelationalSqlParser.RULE_createViewStatement: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case RelationalSqlParser.RULE_createFunctionStatement: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case RelationalSqlParser.RULE_qualifiedName: {
                    // qualifiedName 可能表示表、视图或数据库，根据上下文判断
                    // 默认假设为表引用
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case RelationalSqlParser.RULE_identifier: {
                    // identifier 通常是各种名称，根据上下文可能是不同类型
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case RelationalSqlParser.RULE_columnDefinition: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case RelationalSqlParser.RULE_viewColumnDefinition: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        const processedKeywords = processTokenCandidates(this._parser, candidates.tokens);
        keywords.push(...processedKeywords);

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
