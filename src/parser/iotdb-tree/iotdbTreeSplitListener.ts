import { SingleStatementContext } from '../../lib/iotdb-tree/IoTDBSqlParser';
import { IoTDBSqlParserListener } from '../../lib/iotdb-tree/IoTDBSqlParserListener';
import { SplitListener } from '../common/splitListener';

export class IoTDBTreeSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements IoTDBSqlParserListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
