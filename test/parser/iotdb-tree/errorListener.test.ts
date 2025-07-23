import { IoTDBTreeSQL } from '../../../src';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `CREATE TIMESERIES`;
const sql2 = `SELECT * FROM `;
const sql3 = `CREATE TIMESERIES root.sg1.d1.s1 with`;
const sql4 = `SELECT count(*) FROM root.sg1.d1 order BY sum(s1`;

describe('IoTDBTreeSQL validate invalid sql and test msg', () => {
    const iotdbTreeSQL = new IoTDBTreeSQL();

    test('validate random text', () => {
        const errors = iotdbTreeSQL.validate(randomText);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('not valid at this position');
    });

    test('validate incomplete CREATE TIMESERIES', () => {
        const errors = iotdbTreeSQL.validate(sql1);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('incomplete');
    });

    test('validate incomplete SELECT', () => {
        const errors = iotdbTreeSQL.validate(sql2);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('incomplete');
    });

    test('validate incomplete CREATE TIMESERIES with attributes', () => {
        const errors = iotdbTreeSQL.validate(sql3);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('not valid at this position');
    });

    test('validate incomplete aggregate query', () => {
        const errors = iotdbTreeSQL.validate(sql4);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors[0].message).toContain('incomplete');
    });

    test('validate correct tree path query', () => {
        const correctSql = 'SELECT temperature FROM root.device1.sensor1';
        const errors = iotdbTreeSQL.validate(correctSql);
        expect(errors.length).toBe(0);
    });

    test('validate wildcard query', () => {
        const wildcardSql = 'SELECT * FROM root.sg1.**';
        const errors = iotdbTreeSQL.validate(wildcardSql);
        expect(errors.length).toBe(0);
    });

    test('validate locale change', () => {
        iotdbTreeSQL.locale = 'zh_CN';
        const errors = iotdbTreeSQL.validate(randomText);
        expect(errors.length).toBeGreaterThan(0);
        // Reset locale
        iotdbTreeSQL.locale = 'en_US';
    });
});
