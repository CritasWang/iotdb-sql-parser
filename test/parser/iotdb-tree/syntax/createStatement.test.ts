import { IoTDBTreeSQL } from '../../../../src';

const features = {
    createTimeseries: [
        'CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT',
        'CREATE TIMESERIES root.sg1.d1.s2 WITH DATATYPE=INT32, ENCODING=RLE',
        'CREATE TIMESERIES root.sg1.d1.s3 WITH DATATYPE=TEXT, ENCODING=PLAIN',
        'CREATE TIMESERIES root.device1.sensor1 WITH DATATYPE=DOUBLE, ENCODING=GORILLA, COMPRESSOR=SNAPPY',
    ],
    createTimeseriesWithTags: [
        'CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT TAGS(tag1=v1, tag2=v2)',
        "CREATE TIMESERIES root.sg1.d1.s2 WITH DATATYPE=INT32 TAGS(device_type='sensor') ATTRIBUTES(attr1=value1)",
    ],
    createTimeseriesWithAttributes: [
        "CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT ATTRIBUTES(unit='celsius', description='temperature sensor')",
        "CREATE TIMESERIES root.sg1.d1.s2 WITH DATATYPE=INT32 ATTRIBUTES(range='0-100')",
    ],
    createStorageGroup: [
        'CREATE STORAGE GROUP root.sg1',
        'CREATE STORAGE GROUP root.company.factory1',
        'CREATE STORAGE GROUP root.vehicle.car1',
    ],
    createFunction: [
        "CREATE FUNCTION udf AS 'org.apache.iotdb.udf.UDTFExample'",
        "CREATE FUNCTION my_udf AS 'com.example.MyUDF'",
    ],
    createTrigger: [
        "CREATE TRIGGER trigger1 BEFORE INSERT ON root.sg1.d1.s1 AS 'org.apache.iotdb.trigger.TriggerExample'",
        "CREATE TRIGGER trigger2 AFTER INSERT ON root.sg1.d1.* AS 'com.example.MyTrigger'",
    ],
    createUser: ["CREATE USER user1 'password123'", "CREATE USER admin 'admin123'"],
    createRole: ['CREATE ROLE role1', 'CREATE ROLE admin_role'],
};

describe('IoTDBTreeSQL Create Statements Syntax Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('CREATE TIMESERIES statements', () => {
        features.createTimeseries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TIMESERIES with tags', () => {
        features.createTimeseriesWithTags.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TIMESERIES with attributes', () => {
        features.createTimeseriesWithAttributes.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE STORAGE GROUP statements', () => {
        features.createStorageGroup.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE FUNCTION statements', () => {
        features.createFunction.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TRIGGER statements', () => {
        features.createTrigger.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE USER statements', () => {
        features.createUser.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE ROLE statements', () => {
        features.createRole.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
