import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    insertValues: [
        "INSERT INTO users (id, name) VALUES (1, 'John')",
        "INSERT INTO users VALUES (1, 'John', 'john@example.com')",
        "INSERT INTO products (name, price) VALUES ('Product A', 99.99), ('Product B', 149.99)",
    ],
    insertSelect: [
        'INSERT INTO backup_users SELECT * FROM users',
        'INSERT INTO user_summary (id, name) SELECT id, name FROM users WHERE active = true',
    ],
    insertWithTimestamp: [
        "INSERT INTO sensor_data (time, device_id, temperature) VALUES ('2023-01-01 10:00:00', 'device1', 25.5)",
        "INSERT INTO measurements VALUES (NOW(), 'sensor1', 100.0, 'active')",
    ],
};

describe('IoTDBTableSQL Insert Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('INSERT VALUES statements', () => {
        features.insertValues.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('INSERT SELECT statements', () => {
        features.insertSelect.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('INSERT with timestamp (IoTDB specific)', () => {
        features.insertWithTimestamp.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
