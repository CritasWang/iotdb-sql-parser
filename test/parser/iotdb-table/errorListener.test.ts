import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `SHOW CREATE TABLE`;
const sql2 = `CREATE TABLE `;
const sql3 = `SHOW CREATE TABLE aaa aaa`;
const sql4 = `SELECT count(*) FROM customer order BY sum(a`;

describe('IoTDBTableSQL validate invalid sql and test msg', () => {
    const iotdbTableSQL = new IoTDBTableSQL();

    test('validate random text', () => {
        const errors = iotdbTableSQL.validate(randomText);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('not valid at this position');
    });

    test('validate unComplete sql1', () => {
        const errors = iotdbTableSQL.validate(sql1);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('incomplete');
    });

    test('validate unComplete sql2', () => {
        const errors = iotdbTableSQL.validate(sql2);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('incomplete');
    });

    test('validate unComplete sql3', () => {
        const errors = iotdbTableSQL.validate(sql3);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('not valid at this position');
    });

    test('validate unComplete sql4', () => {
        const errors = iotdbTableSQL.validate(sql4);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('incomplete');
    });

    test('validate random text cn', () => {
        iotdbTableSQL.locale = 'zh_CN';
        const errors = iotdbTableSQL.validate(randomText);
        expect(errors.length).toBeGreaterThan(0);
    });

    test('validate correct sql', () => {
        const correctSql = 'SELECT * FROM table1';
        const errors = iotdbTableSQL.validate(correctSql);
        expect(errors.length).toBe(0);
    });
});
