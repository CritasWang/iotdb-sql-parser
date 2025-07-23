import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    basicDelete: [
        'DELETE FROM users WHERE id = 1',
        "DELETE FROM orders WHERE order_date < '2023-01-01'",
        "DELETE FROM products WHERE price = 0 AND status = 'inactive'",
    ],
    deleteWithSubquery: ['DELETE FROM users WHERE id IN (SELECT user_id FROM inactive_users)'],
    deleteAll: ['DELETE FROM temp_table'],
};

describe('IoTDBTableSQL Delete Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('Basic DELETE statements', () => {
        features.basicDelete.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DELETE with subquery', () => {
        features.deleteWithSubquery.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DELETE all records', () => {
        features.deleteAll.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
