-- INSERT single values
INSERT INTO root.sg1.d1(timestamp,s1) VALUES(1,1.0);
INSERT INTO root.sg1.d1(timestamp,s1,s2) VALUES(2,2.0,3.0);
INSERT INTO root.device1(timestamp,temperature) VALUES(1000,25.5);
INSERT INTO root.device1(timestamp,temperature,humidity) VALUES(2000,26.0,60.5);

-- INSERT multiple values
INSERT INTO root.sg1.d1(timestamp,s1) VALUES(1,1.0),(2,2.0),(3,3.0);
INSERT INTO root.sg1.d1(timestamp,s1,s2) VALUES(1,1.0,10),(2,2.0,20),(3,3.0,30);
INSERT INTO root.device1(timestamp,temperature,humidity) VALUES(1000,25.5,60.0),(2000,26.0,65.0);

-- INSERT with NOW()
INSERT INTO root.sg1.d1(timestamp,s1) VALUES(now(),1.0);
INSERT INTO root.device1(timestamp,temperature) VALUES(now(),25.5);

-- INSERT TABLET
INSERT TABLET root.sg1.d1(timestamp,s1,s2) VALUES 1,1.0,10 2,2.0,20 3,3.0,30;
INSERT TABLET root.device1(timestamp,temperature,humidity) VALUES 1000,25.5,60.0 2000,26.0,65.0;

-- INSERT ALIGNED
INSERT INTO root.sg1.d1(timestamp,s1,s2) ALIGNED VALUES(1,1.0,10);
INSERT INTO root.sg1.d1(timestamp,s1,s2) ALIGNED VALUES(1,1.0,10),(2,2.0,20);
