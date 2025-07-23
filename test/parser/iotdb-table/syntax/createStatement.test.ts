import { IoTDBTableSQL } from 'src/parser/iotdb-table';

const features = {
    createTable: [
        'CREATE TABLE test_table (device_id STRING TAG, temperature FLOAT FIELD)',
        'CREATE TABLE products (time TIMESTAMP TIME, category STRING TAG, product_id STRING TAG, name STRING ATTRIBUTE, price FLOAT FIELD)',
        'CREATE TABLE sensors (plant_id STRING TAG, device_id STRING TAG, model STRING ATTRIBUTE, temperature FLOAT FIELD, humidity DOUBLE FIELD)',
    ],
    createTableWithConstraints: [
        "CREATE TABLE orders (region STRING TAG, order_id STRING TAG, user_id STRING ATTRIBUTE COMMENT 'user identifier', total DOUBLE FIELD COMMENT 'order total amount')",
        "CREATE TABLE IF NOT EXISTS devices (time TIMESTAMP TIME, region STRING TAG COMMENT 'device region', device_id STRING TAG COMMENT 'device identifier', model STRING ATTRIBUTE COMMENT 'device model', temperature FLOAT FIELD COMMENT 'temperature sensor data') COMMENT 'device monitoring table' WITH (TTL=31536000000)",
    ],
    createTableWithTTL: [
        'CREATE TABLE data_table (device_id STRING TAG, value FLOAT FIELD) WITH (TTL=DEFAULT)',
        'CREATE TABLE monitoring (region STRING TAG, device STRING TAG, temperature FLOAT FIELD) WITH (TTL=2592000000)',
    ],
    createTableWithChineseNames: [
        'CREATE TABLE "设备数据" ("区域" STRING TAG, "设备ID" STRING TAG, "温度" FLOAT FIELD)',
        'CREATE TABLE "监控表" (time TIMESTAMP TIME, "区域" STRING TAG COMMENT \'设备区域\', "设备ID" STRING TAG COMMENT \'设备标识\', "温度" FLOAT FIELD COMMENT \'温度数据\') COMMENT \'设备监控表\'',
    ],
    createDatabase: ['CREATE DATABASE test_db'],
};

describe('IoTDBTableSQL Create Statements Syntax Tests', () => {
    const iotdbTable = new IoTDBTableSQL();

    describe('CREATE TABLE statements', () => {
        features.createTable.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TABLE with constraints and comments', () => {
        features.createTableWithConstraints.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TABLE with TTL properties', () => {
        features.createTableWithTTL.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TABLE with Chinese names', () => {
        features.createTableWithChineseNames.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE DATABASE statements', () => {
        features.createDatabase.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTable.validate(sql).length).toBe(0);
            });
        });
    });
});
