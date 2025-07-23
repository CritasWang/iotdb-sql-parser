import { IoTDBTreeSQL } from '../../../src';
import { IoTDBSqlParserListener } from 'src/lib/iotdb-tree/IoTDBSqlParserListener';

describe('IoTDBTreeSQL Listener Tests', () => {
    const expectPath = 'root.device1.sensor1';
    const sql = `SELECT temperature FROM ${expectPath}`;
    const iotdbTree = new IoTDBTreeSQL();

    const parseTree = iotdbTree.parse(sql);

    test('Listener enterFullPath', async () => {
        class MyListener extends IoTDBSqlParserListener {
            result = '';
            enterFullPath = (ctx): void => {
                this.result = ctx.getText();
            };
        }
        const listener = new MyListener();

        iotdbTree.listen(listener, parseTree);
        expect(listener.result).toBe(expectPath);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `SELECT temperature FROM root.device1.sensor1`,
            `CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT`,
            `INSERT INTO root.sg1.d1(timestamp,s1) VALUES(1,1.0)`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = iotdbTree.splitSQLByStatement(sql);

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
            expect(sqlSlices[1].startLine).toBe(2);
            expect(sqlSlices[1].endLine).toBe(2);
            expect(sqlSlices[2].startLine).toBe(3);
            expect(sqlSlices[2].endLine).toBe(3);
        }
    });

    test('Tree path listener', async () => {
        const treePathSql = 'SELECT * FROM root.sg1.d1.*';
        const treeParseTree = iotdbTree.parse(treePathSql);

        class TreePathListener extends IoTDBSqlParserListener {
            paths: string[] = [];
            enterPrefixPath = (ctx): void => {
                this.paths.push(ctx.getText());
            };
        }

        const listener = new TreePathListener();
        iotdbTree.listen(listener, treeParseTree);
        expect(listener.paths.length).toBeGreaterThan(0);
    });
});
