import { RelationalSqlListener } from '../../lib/iotdb-table/RelationalSqlListener';
import { StatementsContext, RelationalSqlParser } from '../../lib/iotdb-table/RelationalSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class IoTDBTableSemanticContextCollector
    extends SemanticContextCollector
    implements RelationalSqlListener
{
    override getWhiteSpaceRuleType(): number {
        return RelationalSqlParser.WS;
    }
    override getStatementRuleType(): number {
        return RelationalSqlParser.RULE_statements;
    }
    enterStatements(ctx: StatementsContext) {
        this.visitStatement(ctx);
    }
}

export { IoTDBTableSemanticContextCollector };
