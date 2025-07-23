import { IoTDBTableSQL } from 'src/parser/iotdb-table';
import { RelationalSqlListener } from 'src/lib/iotdb-table/RelationalSqlListener';

describe('IoTDBTableSQL Listener Tests', () => {
    const expectTableName = 'user1';
    const sql = `select id,name,sex from ${expectTableName}`;
    const iotdbTable = new IoTDBTableSQL();

    const parseTree = iotdbTable.parse(sql);

    test('Listener enterTableName', async () => {
        class MyListener extends RelationalSqlListener {
            result = '';
            enterTableName = (ctx): void => {
                this.result = ctx.getText().toLowerCase();
            };
        }
        const listener = new MyListener();

        iotdbTable.listen(listener, parseTree);
        expect(listener.result).toBe(expectTableName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT id FROM games ORDER BY score;`,
            `INSERT INTO sensor_data (time, device_id, temperature) VALUES ('2023-01-01 10:00:00', 'device1', 25.5);`,
            `CREATE TABLE products (id string TAG, name string ATTRIBUTE, price double FIELD, created_at TIMESTAMP FIELD)`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = iotdbTable.splitSQLByStatement(sql);

        expect(sqlSlices).not.toBeNull();

        if (sqlSlices) {
            // check text in result
            expect(sqlSlices.map((item) => item.text)).toEqual(singleStatementArr);

            // check startIndex and endIndex in result
            sqlSlices.forEach((slice, index) => {
                expect(sql.slice(slice.startIndex, slice.endIndex + 1)).toBe(
                    singleStatementArr[index]
                );
            });

            // check lineNumber in result
            expect(sqlSlices[0].startLine).toBe(1);
            expect(sqlSlices[0].endLine).toBe(1);
            // expect(sqlSlices[1].startLine).toBe(2);
            // expect(sqlSlices[1].endLine).toBe(2);
            // expect(sqlSlices[2].startLine).toBe(3);
            // expect(sqlSlices[2].endLine).toBe(3);
        }
    });
});
