-- Basic SELECT statements
SELECT * FROM users;
SELECT id, name, email FROM customers;
SELECT DISTINCT category FROM products;

-- SELECT with WHERE clause
SELECT * FROM orders WHERE status = 'completed';
SELECT name, price FROM products WHERE price > 100;
SELECT * FROM users WHERE created_at >= '2023-01-01';

-- SELECT with ORDER BY
SELECT * FROM products ORDER BY price DESC;
SELECT name, email FROM users ORDER BY name ASC, email DESC;

-- SELECT with LIMIT
SELECT * FROM logs ORDER BY timestamp DESC LIMIT 100;
SELECT TOP 10 * FROM sales;

-- SELECT with JOIN
SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;
SELECT p.name, c.name FROM products p LEFT JOIN categories c ON p.category_id = c.id;
