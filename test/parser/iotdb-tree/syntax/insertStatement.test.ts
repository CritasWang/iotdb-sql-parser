import { IoTDBTreeSQL } from 'src/parser';

const features = {
    insertSingleValue: [
        'INSERT INTO root.sg1.d1(timestamp,s1) VALUES(1,1.0)',
        'INSERT INTO root.sg1.d1(timestamp,s1,s2) VALUES(2,2.0,3.0)',
        'INSERT INTO root.device1(timestamp,temperature) VALUES(1000,25.5)',
        'INSERT INTO root.device1(timestamp,temperature,humidity) VALUES(2000,26.0,60.5)',
    ],
    insertMultipleValues: [
        'INSERT INTO root.sg1.d1(timestamp,s1) VALUES(1,1.0),(2,2.0),(3,3.0)',
        'INSERT INTO root.sg1.d1(timestamp,s1,s2) VALUES(1,1.0,10),(2,2.0,20),(3,3.0,30)',
        'INSERT INTO root.device1(timestamp,temperature,humidity) VALUES(1000,25.5,60.0),(2000,26.0,65.0)',
    ],
    insertWithNow: [
        'INSERT INTO root.sg1.d1(timestamp,s1) VALUES(now(),1.0)',
        'INSERT INTO root.device1(timestamp,temperature) VALUES(now(),25.5)',
    ],
    insertTablet: [
        'INSERT TABLET root.sg1.d1(timestamp,s1,s2) VALUES 1,1.0,10 2,2.0,20 3,3.0,30',
        'INSERT TABLET root.device1(timestamp,temperature,humidity) VALUES 1000,25.5,60.0 2000,26.0,65.0',
    ],
    insertAligned: [
        'INSERT INTO root.sg1.d1(timestamp,s1,s2) ALIGNED VALUES(1,1.0,10)',
        'INSERT INTO root.sg1.d1(timestamp,s1,s2) ALIGNED VALUES(1,1.0,10),(2,2.0,20)',
    ],
};

describe('IoTDBTreeSQL Insert Statements Syntax Tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    describe('INSERT single value statements', () => {
        features.insertSingleValue.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('INSERT multiple values statements', () => {
        features.insertMultipleValues.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('INSERT with NOW() function', () => {
        features.insertWithNow.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('INSERT TABLET statements', () => {
        features.insertTablet.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });

    describe('INSERT ALIGNED statements', () => {
        features.insertAligned.forEach((sql) => {
            test(`should parse: ${sql}`, () => {
                expect(iotdbTree.validate(sql).length).toBe(0);
            });
        });
    });
});
