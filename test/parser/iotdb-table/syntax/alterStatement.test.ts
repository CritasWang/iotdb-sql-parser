import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    alterTable: ['ALTER TABLE users ADD COLUMN age INT', 'ALTER TABLE users DROP COLUMN email'],
    alterTableRename: ['ALTER TABLE old_users RENAME TO new_users'],
};

describe('IoTDBTableSQL Alter Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('ALTER TABLE column operations', () => {
        features.alterTable.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('ALTER TABLE rename operations', () => {
        features.alterTableRename.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
