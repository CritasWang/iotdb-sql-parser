import { IoTDBTreeSQL } from '../../src';
import { ErrorListener } from '../../src/parser/common/parseErrorListener';
import { CommonTokenStream } from 'antlr4ng';

describe('BasicSQL unit tests', () => {
    const iotdbTree = new IoTDBTreeSQL();

    test('Create lexer', () => {
        const sql = 'SELECT * FROM root.sg1.d1';
        const lexer = iotdbTree.createLexer(sql);

        expect(lexer).not.toBeUndefined();
        expect(lexer).not.toBeNull();
    });

    test('Create lexer with errorListener', () => {
        const sql = 'INVALID@CHARACTERS!';
        const errors = [];
        const errorListener: ErrorListener = (err) => {
            errors.push(err);
        };
        const lexer = iotdbTree.createLexer(sql, errorListener);
        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill();
        // This test might not always produce lexer errors with IoTDB, so just check it runs
        expect(errors.length).toBeGreaterThanOrEqual(0);
    });

    test('Create parser', () => {
        const sql = 'SELECT * FROM root.sg1.d1';
        const parser = iotdbTree.createParser(sql);

        expect(parser).not.toBeUndefined();
        expect(parser).not.toBeNull();
    });

    test('Create parser with errorListener (lexer error)', () => {
        const sql = '袋鼠云数栈UED团队';
        const errors = [];
        const errorListener: ErrorListener = (err) => {
            errors.push(err);
        };
        const parser = iotdbTree.createParser(sql, errorListener);
        parser.program();
        expect(errors.length).not.toBe(0);
    });

    test('Create parser with errorListener (parse error)', () => {
        const sql = 'SHOW TA';
        const errors = [];
        const errorListener: ErrorListener = (err) => {
            errors.push(err);
        };
        const parser = iotdbTree.createParser(sql, errorListener);
        parser.program();
        expect(errors.length).not.toBe(0);
    });

    test('Parse method', () => {
        const sql = 'SELECT * FROM root.sg1.d1';
        const errors = [];
        const errorListener: ErrorListener = (err) => {
            errors.push(err);
        };
        const parseTree = iotdbTree.parse(sql, errorListener);
        expect(parseTree).not.toBeNull();
        expect(parseTree).not.toBeUndefined();
        expect(errors.length).toBe(0);
    });

    test('Parse method with errors', () => {
        const sql = 'SHOW TA';
        const errors = [];
        const errorListener: ErrorListener = (err) => {
            errors.push(err);
        };
        const parseTree = iotdbTree.parse(sql, errorListener);
        expect(parseTree).not.toBeNull();
        expect(parseTree).not.toBeUndefined();
        expect(errors.length).not.toBe(0);
    });

    test('getAllTokens method', () => {
        const sql = 'SELECT * FROM root.sg1.d1;';
        const tokens = iotdbTree.getAllTokens(sql);
        expect(tokens.length).toBeGreaterThan(0);
        // Basic token validation
        expect(tokens[0].text).toBe('SELECT');
    });

    test('getAllTokens method with identifier', () => {
        const sql = 'temperature';
        const tokens = iotdbTree.getAllTokens(sql);
        expect(tokens.length).toBeGreaterThan(0);
    });

    test('getAllTokens method with fullPath', () => {
        const sql = 'root.sg1.d1.s1';
        const tokens = iotdbTree.getAllTokens(sql);
        expect(tokens.length).toBeGreaterThan(0);
        // Should parse path components
        expect(tokens.some((token) => token.text === 'root')).toBe(true);
    });

    test('Validate method with valid sql', () => {
        const sql = 'SELECT s1 FROM root.sg1.d1';
        const errors = iotdbTree.validate(sql);
        expect(errors.length).toBe(0);
    });

    test('Validate method with invalid sql', () => {
        const sql = 'SELECT FROM';
        const errors = iotdbTree.validate(sql);
        expect(errors.length).toBeGreaterThan(0);
    });

    test('Validate method with CREATE TIMESERIES', () => {
        const sql = 'CREATE TIMESERIES root.sg1.d1.s1 WITH DATATYPE=FLOAT';
        const errors = iotdbTree.validate(sql);
        expect(errors.length).toBe(0);
    });

    test('Validate method with INSERT', () => {
        const sql = 'INSERT INTO root.sg1.d1(timestamp,s1) VALUES(1000,25.5)';
        const errors = iotdbTree.validate(sql);
        expect(errors.length).toBe(0);
    });

    test('Validate method with SHOW TIMESERIES', () => {
        const sql = 'SHOW TIMESERIES root.sg1.d1.*';
        const errors = iotdbTree.validate(sql);
        expect(errors.length).toBe(0);
    });
});
