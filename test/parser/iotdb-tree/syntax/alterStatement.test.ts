import { IoTDBTreeSQL } from 'src/parser';

const features = {
    alterTimeseries: [
        "ALTER TIMESERIES root.sg1.d1.s1 SET 'newTag1'='newV1'",
        "ALTER TIMESERIES root.sg1.d1.s1 DROP 'tag1'",
        'ALTER TIMESERIES root.sg1.d1.s1 ADD TAGS tag2=v2,tag3=v3',
        'ALTER TIMESERIES root.sg1.d1.s1 ADD ATTRIBUTES attr1=value1,attr2=value2',
    ],
    alterTimeseriesUpsert: [
        'ALTER TIMESERIES root.sg1.d1.s1 UPSERT TAGS(tag1=newvalue1) ATTRIBUTES(attr1=newattr1)',
        'ALTER TIMESERIES root.sg1.d1.s1 UPSERT ALIAS=newAlias',
    ],
    alterUser: [
        "ALTER USER user1 SET PASSWORD 'newpassword'",
        "ALTER USER admin SET PASSWORD 'admin456'",
    ],
};

describe('IoTDBTreeSQL Alter Statements Syntax Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('ALTER TIMESERIES statements', () => {
        features.alterTimeseries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('ALTER TIMESERIES UPSERT statements', () => {
        features.alterTimeseriesUpsert.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('ALTER USER statements', () => {
        features.alterUser.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
