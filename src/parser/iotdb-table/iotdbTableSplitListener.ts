import { SingleStatementContext } from '../../lib/iotdb-table/RelationalSqlParser';
import { RelationalSqlListener } from '../../lib/iotdb-table/RelationalSqlListener';
import { SplitListener } from '../common/splitListener';

export class IoTDBTableSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements RelationalSqlListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
