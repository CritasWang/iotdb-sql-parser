import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    timeSeriesQuery: [
        'SELECT time, temperature FROM device1',
        "SELECT * FROM device_data WHERE time >= '2023-01-01' AND time <= '2023-12-31'",
    ],
    aggregationWithTime: [
        'SELECT avg(temperature) FROM device1',
        'SELECT max(temperature), min(temperature) FROM device1',
        "SELECT count(*) FROM device1 WHERE time >= '2023-01-01'",
    ],
    basicQueries: [
        "SELECT temperature FROM device1 WHERE time >= '2023-01-01'",
        "SELECT temperature FROM device1 WHERE time >= '2023-01-01'",
        "SELECT temperature FROM device1 WHERE time >= '2023-01-01'",
    ],
    showQueries: ['SHOW TABLES', 'SHOW DATABASES', 'SELECT * FROM device1'],
    basicCRUD: [
        'SELECT last_value(temperature) FROM device1',
        'SELECT * FROM device1',
        'SELECT temperature, humidity FROM device1',
    ],
};

describe('IoTDBTableSQL IoTDB Specific Features Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('Time series queries', () => {
        features.timeSeriesQuery.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Aggregation queries', () => {
        features.aggregationWithTime.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Basic queries', () => {
        features.basicQueries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Show queries', () => {
        features.showQueries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Basic CRUD operations', () => {
        features.basicCRUD.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
