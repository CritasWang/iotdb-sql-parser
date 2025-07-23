import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    select: [
        'SELECT * FROM table1',
        'SELECT id, name FROM users',
        'SELECT COUNT(*) FROM orders',
        'SELECT DISTINCT category FROM products',
        'SELECT * FROM table1 WHERE id > 10',
        'SELECT * FROM table1 ORDER BY name ASC',
        'SELECT * FROM table1 LIMIT 100',
        'SELECT a.id, b.name FROM table1 a JOIN table2 b ON a.id = b.user_id',
    ],
    selectWithAggregate: [
        'SELECT COUNT(*), AVG(price) FROM products',
        'SELECT category, SUM(amount) FROM sales GROUP BY category',
        'SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5',
    ],
    selectWithSubQueries: [
        'SELECT * FROM (SELECT id, name FROM users) AS subquery',
        'SELECT * FROM table1 WHERE id IN (SELECT user_id FROM orders)',
        'SELECT * FROM table1 WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = table1.id)',
    ],
    selectWithTimeRange: [
        "SELECT time, temperature FROM sensors WHERE time >= '2023-01-01'",
        "SELECT * FROM device_data WHERE time BETWEEN '2023-01-01' AND '2023-12-31'",
    ],
};

describe('IoTDBTableSQL Select Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('Basic SELECT statements', () => {
        features.select.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with aggregate functions', () => {
        features.selectWithAggregate.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with subqueries', () => {
        features.selectWithSubQueries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SELECT with time range (IoTDB specific)', () => {
        features.selectWithTimeRange.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
