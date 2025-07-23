import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    createTable: [
        'CREATE TABLE test_table (id INT, name VARCHAR(100))',
        'CREATE TABLE products (id INT, name VARCHAR(100), price DECIMAL(10,2), created_at TIMESTAMP)',
    ],
    createTableWithConstraints: [
        'CREATE TABLE orders (id INT, user_id INT, amount DECIMAL(10,2), order_date DATE)',
    ],
    createDatabase: ['CREATE DATABASE test_db'],
};

describe('IoTDBTableSQL Create Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('CREATE TABLE statements', () => {
        features.createTable.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TABLE with basic constraints', () => {
        features.createTableWithConstraints.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE DATABASE statements', () => {
        features.createDatabase.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
