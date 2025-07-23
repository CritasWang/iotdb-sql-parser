import { IoTDBTreeSQL } from 'src/parser';

const features = {
    showTimeseries: [
        'SHOW TIMESERIES',
        'SHOW TIMESERIES root.sg1.*',
        'SHOW TIMESERIES root.sg1.** WHERE DATATYPE=FLOAT',
        'SHOW TIMESERIES root.sg1.d1.s1',
        'SHOW TIMESERIES root.** LIMIT 10',
        'SHOW TIMESERIES root.** LIMIT 10 OFFSET 5',
    ],
    showStorageGroup: [
        'SHOW STORAGE GROUP',
        'SHOW STORAGE GROUP root.*',
        'SHOW STORAGE GROUP root.sg1',
    ],
    showDevices: [
        'SHOW DEVICES',
        'SHOW DEVICES root.sg1.*',
        'SHOW DEVICES root.sg1.** WITH STORAGE GROUP',
        "SHOW DEVICES WHERE DEVICE CONTAINS 'd1'",
    ],
    showChildPaths: [
        'SHOW CHILD PATHS root',
        'SHOW CHILD PATHS root.sg1',
        'SHOW CHILD NODES root',
        'SHOW CHILD NODES root.sg1',
    ],
    showFunctions: ['SHOW FUNCTIONS', 'SHOW FUNCTIONS udf'],
    showTriggers: ['SHOW TRIGGERS'],
    showUsers: ['SHOW USERS', 'SHOW USER PRIVILEGES user1'],
    showRoles: ['SHOW ROLES', 'SHOW ROLE PRIVILEGES role1'],
    showVersion: ['SHOW VERSION'],
    showFlushInfo: ['SHOW FLUSH INFO'],
    showMergeInfo: ['SHOW MERGE INFO'],
    showQueryProcesslist: ['SHOW QUERY PROCESSLIST'],
};

describe('IoTDBTreeSQL Show Statements Syntax Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('SHOW TIMESERIES statements', () => {
        features.showTimeseries.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW STORAGE GROUP statements', () => {
        features.showStorageGroup.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW DEVICES statements', () => {
        features.showDevices.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW CHILD PATHS/NODES statements', () => {
        features.showChildPaths.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW FUNCTIONS statements', () => {
        features.showFunctions.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW TRIGGERS statements', () => {
        features.showTriggers.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW USERS statements', () => {
        features.showUsers.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW ROLES statements', () => {
        features.showRoles.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('SHOW system information statements', () => {
        [
            ...features.showVersion,
            ...features.showFlushInfo,
            ...features.showMergeInfo,
            ...features.showQueryProcesslist,
        ].forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
