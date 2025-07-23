import { CodeCompletionCore } from 'antlr4-c3';
import { Parser, Token } from 'antlr4ng';

import { RelationalSqlParser } from '../../lib/iotdb-table/RelationalSqlParser';
import { ParseErrorListener } from '../common/parseErrorListener';

export class IoTDBTableErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [RelationalSqlParser.RULE_createDbStatement, 'database'],
        [RelationalSqlParser.RULE_alterDbStatement, 'database'],
        [RelationalSqlParser.RULE_createTableStatement, 'table'],
        [RelationalSqlParser.RULE_createViewStatement, 'view'],
        [RelationalSqlParser.RULE_createFunctionStatement, 'function'],
        [RelationalSqlParser.RULE_columnDefinition, 'column'],
        [RelationalSqlParser.RULE_viewColumnDefinition, 'column'],
        [RelationalSqlParser.RULE_qualifiedName, 'name'],
        [RelationalSqlParser.RULE_identifier, 'identifier'],
    ]);

    public getExpectedText(parser: Parser, token: Token) {
        let expectedText = '';
        const input = this.parserContext.getParsedInput();

        /**
         * Get the program context.
         * When called error listener, `this._parseTree` is still `undefined`,
         * so we can't use cached parseTree in `getMinimumParserInfo`
         */
        let currentContext = parser.context ?? undefined;
        while (currentContext?.parent) {
            currentContext = currentContext.parent;
        }

        const parserInfo = this.parserContext.getMinimumParserInfo(
            input,
            token.tokenIndex,
            currentContext
        );

        if (!parserInfo) return '';

        const { parser: c3Parser, newTokenIndex, parseTree: c3Context } = parserInfo;

        const core = new CodeCompletionCore(c3Parser);
        core.preferredRules = this.preferredRules;

        const candidates = core.collectCandidates(newTokenIndex, c3Context);

        if (candidates.rules.size) {
            const result: string[] = [];
            // get expectedText as collect rules first
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                if (!name) continue;

                switch (ruleType) {
                    // For references to existing objects
                    case RelationalSqlParser.RULE_qualifiedName:
                    case RelationalSqlParser.RULE_identifier: {
                        // These rules can represent existing database objects
                        if (!result.includes(`{existing}${name}`)) {
                            result.push(`{existing}${name}`);
                        }
                        break;
                    }
                    // For creating new objects
                    case RelationalSqlParser.RULE_createDbStatement:
                    case RelationalSqlParser.RULE_createTableStatement:
                    case RelationalSqlParser.RULE_createViewStatement:
                    case RelationalSqlParser.RULE_createFunctionStatement: {
                        if (!result.includes(`{new}${name}`)) {
                            result.push(`{new}${name}`);
                        }
                        break;
                    }
                    // For column definitions (always new when defining)
                    case RelationalSqlParser.RULE_columnDefinition:
                    case RelationalSqlParser.RULE_viewColumnDefinition: {
                        if (!result.includes(`{new}column`)) {
                            result.push(`{new}column`);
                        }
                        break;
                    }
                    // For altering existing objects
                    case RelationalSqlParser.RULE_alterDbStatement: {
                        if (!result.includes(`{existing}database`)) {
                            result.push(`{existing}database`);
                        }
                        break;
                    }
                }
            }
            expectedText = result.join('{or}');
        }
        if (candidates.tokens.size) {
            expectedText += expectedText ? '{orKeyword}' : '{keyword}';
        }
        return expectedText;
    }
}
