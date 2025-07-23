import { IoTDBTableSQL } from 'src/parser/iotdb-table';

describe('IoTDBTableSQL Lexer tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    const sql = 'SELECT * FROM table1';
    const tokens = iotdbTable.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(7);
    });
});
