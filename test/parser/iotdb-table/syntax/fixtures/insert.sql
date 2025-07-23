-- Basic INSERT statements
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
INSERT INTO products VALUES (1, 'Product A', 99.99, 'electronics');

-- Multiple value INSERT
INSERT INTO categories (name, description) VALUES 
    ('Electronics', 'Electronic devices'),
    ('Books', 'Books and publications'),
    ('Clothing', 'Apparel and accessories');

-- INSERT SELECT
INSERT INTO backup_users SELECT * FROM users WHERE active = 1;
INSERT INTO monthly_sales (month, total) 
    SELECT DATE_FORMAT(order_date, '%Y-%m'), SUM(amount) 
    FROM orders 
    GROUP BY DATE_FORMAT(order_date, '%Y-%m');

-- INSERT with timestamp (IoTDB specific)
INSERT INTO sensor_data (time, device_id, temperature, humidity) 
VALUES ('2023-01-01 10:00:00', 'device001', 25.5, 60.2);

INSERT INTO measurements VALUES (NOW(), 'sensor1', 100.0, 'NORMAL');
