import { IoTDBTreeSQL } from 'src/parser';

const features = {
    dropTimeseries: [
        'DROP TIMESERIES root.sg1.d1.s1',
        'DROP TIMESERIES root.sg1.d1.*',
        'DROP TIMESERIES root.sg1.**',
        'DROP TIMESERIES root.device1.temperature,root.device1.humidity',
    ],
    dropStorageGroup: [
        'DROP STORAGE GROUP root.sg1',
        'DROP STORAGE GROUP root.sg1,root.sg2',
        'DROP STORAGE GROUP root.company.factory1',
    ],
    dropFunction: ['DROP FUNCTION udf', 'DROP FUNCTION my_udf'],
    dropTrigger: ['DROP TRIGGER trigger1', 'DROP TRIGGER trigger2'],
    dropUser: ['DROP USER user1', 'DROP USER guest'],
    dropRole: ['DROP ROLE role1', 'DROP ROLE viewer_role'],
};

describe('IoTDBTreeSQL Drop Statements Syntax Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('DROP TIMESERIES statements', () => {
        features.dropTimeseries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DROP STORAGE GROUP statements', () => {
        features.dropStorageGroup.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DROP FUNCTION statements', () => {
        features.dropFunction.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DROP TRIGGER statements', () => {
        features.dropTrigger.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DROP USER statements', () => {
        features.dropUser.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DROP ROLE statements', () => {
        features.dropRole.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
