import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    basicUpdate: [
        "UPDATE users SET name = 'John Doe' WHERE id = 1",
        "UPDATE products SET price = 99.99 WHERE category = 'electronics'",
        "UPDATE orders SET status = 'completed' WHERE order_date < '2023-01-01'",
    ],
    updateWithSubquery: [
        "UPDATE users SET status = 'inactive' WHERE id IN (SELECT user_id FROM inactive_users)",
    ],
};

describe('IoTDBTableSQL Update Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('Basic UPDATE statements', () => {
        features.basicUpdate.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('UPDATE with subquery', () => {
        features.updateWithSubquery.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
