import { IoTDBTreeSQL } from '../../../../src';

const features = {
    basicSelect: [
        'SELECT temperature FROM root.device1.sensor1',
        'SELECT temperature, humidity FROM root.device1.sensor1, root.device1.sensor2',
        'SELECT * FROM root.device1.*',
        'SELECT * FROM root.sg1.**',
        'SELECT s1, s2 FROM root.sg1.d1',
    ],
    selectWithConditions: [
        'SELECT temperature FROM root.device1.sensor1 WHERE time > 1000',
        'SELECT * FROM root.sg1.d1 WHERE temperature > 20',
        "SELECT temperature FROM root.device1.sensor1 WHERE time >= '2023-01-01' AND time <= '2023-12-31'",
        'SELECT * FROM root.sg1.d1 WHERE s1 > 10 AND s2 < 100',
    ],
    selectWithTimeRange: [
        'SELECT temperature FROM root.device1.sensor1 WHERE time > now() - 1h',
        "SELECT * FROM root.sg1.d1 WHERE time >= '2023-01-01 00:00:00'",
        'SELECT temperature FROM root.device1.sensor1 WHERE time > 1000 AND time < 2000',
    ],
    selectWithAggregation: [
        'SELECT count(temperature) FROM root.device1.sensor1',
        'SELECT avg(temperature), max(humidity) FROM root.device1.sensor1, root.device1.sensor2',
        'SELECT sum(s1) FROM root.sg1.d1 GROUP BY ([1000, 2000), 100ms)',
        'SELECT count(*) FROM root.sg1.d1',
    ],
    selectWithGroupBy: [
        'SELECT count(s1) FROM root.sg1.d1 GROUP BY ([0, 10000), 1000ms)',
        'SELECT avg(temperature) FROM root.device1.sensor1 GROUP BY ([1000, 2000), 100ms)',
        'SELECT max(s1), min(s2) FROM root.sg1.d1 GROUP BY ([1000, 2000), 100ms)',
    ],
    selectWithOrderBy: [
        'SELECT temperature FROM root.device1.sensor1 ORDER BY time DESC',
        'SELECT * FROM root.sg1.d1 ORDER BY time ASC',
        'SELECT temperature, humidity FROM root.device1.* ORDER BY temperature DESC',
    ],
    selectWithLimit: [
        'SELECT temperature FROM root.device1.sensor1 LIMIT 100',
        'SELECT * FROM root.sg1.d1 LIMIT 50 OFFSET 10',
        'SELECT temperature FROM root.device1.sensor1 ORDER BY time DESC LIMIT 10',
    ],
    selectWithFill: [
        'SELECT temperature FROM root.device1.sensor1 WHERE time >= 1000 AND time <= 2000 FILL(linear)',
        'SELECT s1 FROM root.sg1.d1 WHERE time >= 1000 AND time <= 2000 FILL(previous)',
        'SELECT temperature FROM root.device1.sensor1 WHERE time >= 1000 AND time <= 2000 FILL(20.0)',
    ],
};

describe('IoTDBTreeSQL Select Statements Syntax Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('Basic SELECT statements', () => {
        features.basicSelect.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with conditions', () => {
        features.selectWithConditions.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with time range', () => {
        features.selectWithTimeRange.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with aggregation', () => {
        features.selectWithAggregation.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with GROUP BY', () => {
        features.selectWithGroupBy.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with ORDER BY', () => {
        features.selectWithOrderBy.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with LIMIT', () => {
        features.selectWithLimit.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with FILL', () => {
        features.selectWithFill.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
