import { IoTDBTreeSQL } from 'src/parser';

const features = {
    pathPatterns: [
        'SELECT * FROM root.sg1.*',
        'SELECT * FROM root.sg1.**',
        'SELECT s1, s2 FROM root.sg1.d*',
        'SELECT temperature FROM root.device*.sensor*',
        'SELECT * FROM root.**.s1',
    ],
    timeSeriesSpecific: [
        'SELECT last_value(temperature) FROM root.device1.sensor1',
        'SELECT first_value(humidity) FROM root.device1.sensor2',
        'SELECT count(s1) FROM root.sg1.d1',
        'SELECT avg(temperature) FROM root.device1.sensor1 WHERE time >= 1000',
    ],
    aggregationFunctions: [
        'SELECT count(*) FROM root.sg1.d1',
        'SELECT avg(s1), max(s2), min(s3) FROM root.sg1.d1',
        'SELECT sum(temperature) FROM root.device1.sensor1',
        'SELECT stddev(humidity) FROM root.device1.sensor2',
        'SELECT variance(s1) FROM root.sg1.d1',
    ],
    timeWindowQueries: [
        'SELECT count(s1) FROM root.sg1.d1 GROUP BY ([0, 10000), 1000ms)',
        'SELECT avg(temperature) FROM root.device1.sensor1 GROUP BY ([2023-01-01, 2023-02-01), 1d)',
        'SELECT max(s1) FROM root.sg1.d1 GROUP BY ([1000, 2000), 100ms, 50ms)',
    ],
    fillQueries: [
        'SELECT s1 FROM root.sg1.d1 WHERE time >= 1000 AND time <= 2000 FILL(linear)',
        'SELECT temperature FROM root.device1.sensor1 WHERE time >= 1000 AND time <= 2000 FILL(previous)',
        'SELECT humidity FROM root.device1.sensor2 WHERE time >= 1000 AND time <= 2000 FILL(20.0)',
        'SELECT s1 FROM root.sg1.d1 WHERE time >= 1000 AND time <= 2000 FILL(PREVIOUS)',
    ],
    lastQueries: [
        'SELECT last * FROM root.sg1.**',
        'SELECT last s1, s2 FROM root.sg1.d1',
        'SELECT last temperature FROM root.device1.sensor1',
        'SELECT last * FROM root.** ORDER BY TIMESERIES ASC',
    ],
    alignByDevice: [
        'SELECT s1, s2 FROM root.sg1.d1, root.sg1.d2 ALIGN BY DEVICE',
        'SELECT temperature FROM root.device*.sensor1 ALIGN BY DEVICE',
        'SELECT * FROM root.sg1.** ALIGN BY DEVICE',
    ],
    udtfQueries: [
        'SELECT s1, udf(s2) FROM root.sg1.d1',
        'SELECT temperature, avg(temperature) FROM root.device1.sensor1',
    ],
};

describe('IoTDBTreeSQL IoTDB Tree Specific Features Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('Path pattern queries', () => {
        features.pathPatterns.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Time series specific functions', () => {
        features.timeSeriesSpecific.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Aggregation functions', () => {
        features.aggregationFunctions.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Time window queries', () => {
        features.timeWindowQueries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Fill queries', () => {
        features.fillQueries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Last value queries', () => {
        features.lastQueries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Align by device queries', () => {
        features.alignByDevice.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('UDTF queries', () => {
        features.udtfQueries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
