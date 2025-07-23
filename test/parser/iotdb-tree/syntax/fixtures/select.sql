-- Basic SELECT statements with tree paths
SELECT temperature FROM root.device1.sensor1;
SELECT temperature, humidity FROM root.device1.sensor1, root.device1.sensor2;
SELECT * FROM root.device1.*;
SELECT * FROM root.sg1.**;

-- SELECT with wildcards
SELECT s1, s2 FROM root.sg1.d*;
SELECT temperature FROM root.device*.sensor*;
SELECT * FROM root.**.temperature;

-- SELECT with conditions
SELECT temperature FROM root.device1.sensor1 WHERE time > 1000;
SELECT * FROM root.sg1.d1 WHERE temperature > 20;
SELECT temperature FROM root.device1.sensor1 WHERE time >= '2023-01-01' AND time <= '2023-12-31';

-- SELECT with aggregation
SELECT count(temperature) FROM root.device1.sensor1;
SELECT avg(temperature), max(humidity) FROM root.device1.sensor1, root.device1.sensor2;
SELECT sum(s1) FROM root.sg1.d1 GROUP BY ([1000, 2000), 100ms);

-- SELECT with ORDER BY and LIMIT
SELECT temperature FROM root.device1.sensor1 ORDER BY time DESC;
SELECT * FROM root.sg1.d1 ORDER BY time ASC LIMIT 100;
SELECT temperature FROM root.device1.sensor1 LIMIT 50 OFFSET 10;

-- SELECT with FILL
SELECT temperature FROM root.device1.sensor1 WHERE time >= 1000 AND time <= 2000 FILL(linear);
SELECT s1 FROM root.sg1.d1 WHERE time >= 1000 AND time <= 2000 FILL(previous);

-- LAST queries
SELECT last * FROM root.sg1.**;
SELECT last temperature FROM root.device1.sensor1;

-- ALIGN BY DEVICE
SELECT s1, s2 FROM root.sg1.d1, root.sg1.d2 ALIGN BY DEVICE;
SELECT temperature FROM root.device*.sensor1 ALIGN BY DEVICE;
