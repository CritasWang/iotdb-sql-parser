import { IoTDBSqlParserListener } from '../../lib/iotdb-tree/IoTDBSqlParserListener';
import { StatementsContext, IoTDBSqlParser } from '../../lib/iotdb-tree/IoTDBSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class IoTDBTreeSemanticContextCollector
    extends SemanticContextCollector
    implements IoTDBSqlParserListener
{
    override getWhiteSpaceRuleType(): number {
        return IoTDBSqlParser.WS;
    }
    override getStatementRuleType(): number {
        return IoTDBSqlParser.RULE_statements;
    }
    enterStatements(ctx: StatementsContext) {
        this.visitStatement(ctx);
    }
}

export { IoTDBTreeSemanticContextCollector };
