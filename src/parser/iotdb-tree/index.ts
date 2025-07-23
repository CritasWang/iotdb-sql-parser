import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { processTokenCandidates } from '../common/tokenUtils';
import { SqlLexer } from '../../lib/iotdb-tree/SqlLexer';
import { ProgramContext, IoTDBSqlParser } from '../../lib/iotdb-tree/IoTDBSqlParser';
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
import { IoTDBTreeEntityCollector } from './iotdbTreeEntityCollector';
import { IoTDBTreeErrorListener } from './iotdbTreeErrorListener';
import { IoTDBTreeSqlSplitListener } from './iotdbTreeSplitListener';
import { IoTDBTreeSemanticContextCollector } from './iotdbTreeSemanticContextCollector';

export { IoTDBTreeEntityCollector, IoTDBTreeSqlSplitListener };

export class IoTDBTreeSQL extends BasicSQL<SqlLexer, ProgramContext, IoTDBSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new SqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new IoTDBSqlParser(tokenStream);
    }

    protected get splitListener() {
        return new IoTDBTreeSqlSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): IoTDBTreeErrorListener {
        return new IoTDBTreeErrorListener(_errorListener, this, this.preferredRules);
    }

    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new IoTDBTreeEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new IoTDBTreeSemanticContextCollector(input, caretPosition, allTokens, options);
    }

    protected preferredRules: Set<number> = new Set([
        IoTDBSqlParser.RULE_createDatabase,
        IoTDBSqlParser.RULE_createTimeseries,
        IoTDBSqlParser.RULE_createFunction,
        IoTDBSqlParser.RULE_fullPath,
        IoTDBSqlParser.RULE_prefixPath,
        IoTDBSqlParser.RULE_identifier,
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
                case IoTDBSqlParser.RULE_createDatabase: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case IoTDBSqlParser.RULE_createTimeseries: {
                    syntaxContextType = EntityContextType.TIMESERIES_CREATE;
                    break;
                }
                case IoTDBSqlParser.RULE_createFunction: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case IoTDBSqlParser.RULE_fullPath: {
                    // fullPath 通常表示时间序列路径
                    syntaxContextType = EntityContextType.TIMESERIES;
                    break;
                }
                case IoTDBSqlParser.RULE_prefixPath: {
                    // prefixPath 通常表示数据库路径或设备路径
                    syntaxContextType = EntityContextType.DEVICE;
                    break;
                }
                case IoTDBSqlParser.RULE_identifier: {
                    // 标识符可能表示数据库名、函数名等，根据上下文判断
                    // 默认情况下不做特殊处理
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
