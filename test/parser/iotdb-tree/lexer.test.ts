import { IoTDBTreeSQL } from '../../../src';

describe('IoTDBTreeSQL Lexer tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    const sql = 'SELECT temperature FROM root.device1.sensor1';
    const tokens = iotdbTree.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(11);
    });

    test('tree path lexing', () => {
        const treePathSql = 'SELECT * FROM root.sg1.d1.s1';
        const treeTokens = iotdbTree.getAllTokens(treePathSql);
        expect(treeTokens.length).toBeGreaterThan(5);
    });

    test('wildcard path lexing', () => {
        const wildcardSql = 'SELECT * FROM root.sg1.**';
        const wildcardTokens = iotdbTree.getAllTokens(wildcardSql);
        expect(wildcardTokens.length).toBeGreaterThan(5);
    });
});
