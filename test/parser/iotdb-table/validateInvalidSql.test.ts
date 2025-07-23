import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TABLE`;

describe('IoTDBTableSQL validate invalid sql', () => {
    const iotdbTable = new IoTDBTableSQL();

    test('validate random text', () => {
        expect(iotdbTable.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(iotdbTable.validate(unCompleteSQL).length).not.toBe(0);
    });

    test('validate correct sql', () => {
        const correctSql = 'SELECT * FROM table1';
        expect(iotdbTable.validate(correctSql).length).toBe(0);
    });

    test('validate time series specific sql', () => {
        const timeSeriesSql = 'SELECT time, temperature FROM root.device1';
        expect(iotdbTable.validate(timeSeriesSql).length).toBe(0);
    });
});
