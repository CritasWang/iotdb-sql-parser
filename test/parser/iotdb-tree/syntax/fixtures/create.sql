-- CREATE TIMESERIES statements
CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT;
CREATE TIMESERIES root.sg1.d1.s2 WITH DATATYPE=INT32, ENCODING=RLE;
CREATE TIMESERIES root.sg1.d1.s3 WITH DATATYPE=TEXT, ENCODING=PLAIN;
CREATE TIMESERIES root.device1.sensor1 WITH DATATYPE=DOUBLE, ENCODING=GORILLA, COMPRESSOR=SNAPPY;

-- CREATE TIMESERIES with tags and attributes
CREATE TIMESERIES root.sg1.d1.temperature WITH DATATYPE=FLOAT TAGS(device_type='sensor', location='room1') ATTRIBUTES(unit='celsius', range='-50-100');
CREATE TIMESERIES root.sg1.d1.humidity WITH DATATYPE=FLOAT TAGS(device_type='sensor') ATTRIBUTES(unit='%', description='humidity sensor');

-- CREATE STORAGE GROUP statements
CREATE STORAGE GROUP root.sg1;
CREATE STORAGE GROUP root.company.factory1;
CREATE STORAGE GROUP root.vehicle.car1;

-- CREATE FUNCTION statements
CREATE FUNCTION udf AS 'org.apache.iotdb.udf.UDTFExample';
CREATE FUNCTION my_avg AS 'com.example.MyAvgUDF';
CREATE FUNCTION temperature_converter AS 'com.example.TemperatureConverter';

-- CREATE TRIGGER statements
CREATE TRIGGER trigger1 BEFORE INSERT ON root.sg1.d1.s1 AS 'org.apache.iotdb.trigger.TriggerExample';
CREATE TRIGGER temperature_alert AFTER INSERT ON root.device1.temperature AS 'com.example.TemperatureAlertTrigger';

-- CREATE USER and ROLE statements
CREATE USER analyst 'password123';
CREATE USER operator 'op456';
CREATE ROLE data_reader;
CREATE ROLE admin_role;
