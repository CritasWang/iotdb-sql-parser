import { IoTDBTreeSQL } from 'src/parser';

const features = {
    deleteTimeseries: [
        'DELETE FROM root.sg1.d1.s1 WHERE time <= 100',
        'DELETE FROM root.sg1.d1.* WHERE time >= 1000 AND time <= 2000',
        'DELETE FROM root.device1.temperature WHERE time < now() - 1d',
        'DELETE FROM root.sg1.** WHERE time <= 500',
    ],
    deleteWithTimeRange: [
        "DELETE FROM root.sg1.d1.s1 WHERE time >= '2023-01-01' AND time <= '2023-12-31'",
        "DELETE FROM root.device1.sensor1 WHERE time > '2023-01-01 00:00:00'",
    ],
    deleteAll: [
        'DELETE FROM root.sg1.d1.s1',
        'DELETE FROM root.sg1.d1.*',
        'DELETE FROM root.sg1.**',
    ],
    deletePartition: ['DELETE PARTITION root.sg1.d1 0,1,2', 'DELETE PARTITION root.sg1 1,2,3'],
};

describe('IoTDBTreeSQL Delete Statements Syntax Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('DELETE timeseries with conditions', () => {
        features.deleteTimeseries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DELETE with time range', () => {
        features.deleteWithTimeRange.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DELETE all data', () => {
        features.deleteAll.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DELETE PARTITION statements', () => {
        features.deletePartition.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
