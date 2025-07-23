import { CodeCompletionCore } from 'antlr4-c3';
import { Parser, Token } from 'antlr4ng';

import { IoTDBSqlParser } from '../../lib/iotdb-tree/IoTDBSqlParser';
import { ParseErrorListener } from '../common/parseErrorListener';

export class IoTDBTreeErrorListener extends ParseErrorListener {
    private objectNames: Map<number, string> = new Map([
        [IoTDBSqlParser.RULE_createDatabase, 'database'],
        [IoTDBSqlParser.RULE_alterDatabase, 'database'],
        [IoTDBSqlParser.RULE_createTimeseries, 'timeseries'],
        [IoTDBSqlParser.RULE_createFunction, 'function'],
        [IoTDBSqlParser.RULE_fullPath, 'path'],
        [IoTDBSqlParser.RULE_prefixPath, 'path'],
        [IoTDBSqlParser.RULE_identifier, 'identifier'],
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
                    // For references to existing objects and paths
                    case IoTDBSqlParser.RULE_fullPath:
                    case IoTDBSqlParser.RULE_prefixPath:
                    case IoTDBSqlParser.RULE_identifier: {
                        // These rules can represent existing database objects
                        if (!result.includes(`{existing}${name}`)) {
                            result.push(`{existing}${name}`);
                        }
                        break;
                    }
                    // For creating new objects
                    case IoTDBSqlParser.RULE_createDatabase:
                    case IoTDBSqlParser.RULE_createTimeseries:
                    case IoTDBSqlParser.RULE_createFunction: {
                        if (!result.includes(`{new}${name}`)) {
                            result.push(`{new}${name}`);
                        }
                        break;
                    }
                    // For altering existing objects
                    case IoTDBSqlParser.RULE_alterDatabase: {
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
