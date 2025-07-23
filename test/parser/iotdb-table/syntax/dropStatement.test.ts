import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    dropTable: ['DROP TABLE users', 'DROP TABLE IF EXISTS products'],
    dropDatabase: ['DROP DATABASE test_db', 'DROP DATABASE IF EXISTS backup_db'],
};

describe('IoTDBTableSQL Drop Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('DROP TABLE statements', () => {
        features.dropTable.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DROP DATABASE statements', () => {
        features.dropDatabase.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
