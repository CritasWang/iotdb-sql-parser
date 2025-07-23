import { IoTDBTreeSQL, IoTDBTreeSqlSplitListener } from 'src/parser/iotdb-tree';
import { IoTDBSqlParserListener } from 'src/lib/iotdb-tree/IoTDBSqlParserListener';

const validSQL1 = `SELECT temperature FROM root.device1.sensor1`;
const validSQL2 = `CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT`;
const inValidSQL = `CREATE TIMESERIES`;

describe('IoTDBTreeSQL ErrorStrategy test', () => {
    const iotdbTreeSQL = new IoTDBTreeSQL();

    test('Parse with error recovery', () => {
        const sql = [validSQL1, inValidSQL, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = iotdbTreeSQL.parse(sql, () => {});
        const splitListener = new IoTDBTreeSqlSplitListener();
        iotdbTreeSQL.listen(splitListener as IoTDBSqlParserListener, parseTree);

        // Check that we have statements and some have errors
        expect(splitListener.statementsContext.length).toBeGreaterThan(0);

        const hasErrors = splitListener.statementsContext.some((item) => item.exception !== null);
        expect(hasErrors).toBe(true);
    });

    test('Validate error detection', () => {
        const errors = iotdbTreeSQL.validate(inValidSQL);
        expect(errors.length).toBeGreaterThan(0);
    });

    test('Validate correct SQL', () => {
        const errors = iotdbTreeSQL.validate(validSQL1);
        expect(errors.length).toBe(0);
    });

    test('Mixed valid and invalid statements', () => {
        const mixedSql = [
            'SELECT temperature FROM root.device1.sensor1',
            'INVALID STATEMENT HERE',
            'CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT',
        ].join('\n');

        const parseTree = iotdbTreeSQL.parse(mixedSql, () => {});
        expect(parseTree).not.toBeNull();
    });
});
