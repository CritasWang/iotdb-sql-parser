import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    showTables: ['SHOW TABLES', 'SHOW TABLES FROM database_name'],
    showDatabases: ['SHOW DATABASES'],
    showColumns: ['DESCRIBE users', 'DESC users'],
    showCreate: ['SHOW CREATE TABLE users'],
};

describe('IoTDBTableSQL Show Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('SHOW TABLES statements', () => {
        features.showTables.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW DATABASES statements', () => {
        features.showDatabases.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DESCRIBE statements', () => {
        features.showColumns.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW CREATE statements', () => {
        features.showCreate.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
