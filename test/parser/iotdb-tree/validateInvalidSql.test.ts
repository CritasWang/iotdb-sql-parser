import { IoTDBTreeSQL } from '../../../src';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `CREATE TIMESERIES`;

describe('IoTDBTreeSQL validate invalid sql', () => {
    const iotdbTree = new IoTDBTreeSQL();

    test('validate random text', () => {
        expect(iotdbTree.validate(randomText).length).not.toBe(0);
    });

    test('validate incomplete sql', () => {
        expect(iotdbTree.validate(unCompleteSQL).length).not.toBe(0);
    });

    test('validate correct tree path sql', () => {
        const correctSql = 'SELECT temperature FROM root.device1.sensor1';
        expect(iotdbTree.validate(correctSql).length).toBe(0);
    });

    test('validate wildcard path sql', () => {
        const wildcardSql = 'SELECT * FROM root.sg1.**';
        expect(iotdbTree.validate(wildcardSql).length).toBe(0);
    });

    test('validate time series creation', () => {
        const timeseriesSql = 'CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT';
        expect(iotdbTree.validate(timeseriesSql).length).toBe(0);
    });

    test('validate data insertion', () => {
        const insertSql = 'INSERT INTO root.sg1.d1(timestamp,s1) VALUES(1,1.0)';
        expect(iotdbTree.validate(insertSql).length).toBe(0);
    });
});
