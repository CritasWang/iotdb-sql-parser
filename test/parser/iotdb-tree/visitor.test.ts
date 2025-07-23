import { IoTDBTreeSQL } from '../../../src';
import { IoTDBSqlParserVisitor } from '../../../src/lib/iotdb-tree/IoTDBSqlParserVisitor';

describe('IoTDBTreeSQL Visitor Tests', () => {
    const expectPath = 'root.device1.sensor1';
    const sql = `SELECT temperature FROM ${expectPath}`;
    const iotdbTree = new IoTDBTreeSQL();

    const parseTree = iotdbTree.parse(sql, (error) => {
        console.error('Parse error:', error);
    });

    test('Visitor visitFullPath', () => {
        class MyVisitor extends IoTDBSqlParserVisitor<string[]> {
            private paths: string[] = [];

            defaultResult(): string[] {
                return this.paths;
            }

            aggregateResult(aggregate: string[], nextResult: string[]): string[] {
                return [...aggregate, ...nextResult];
            }

            visitProgram = (ctx) => {
                return this.visitChildren(ctx);
            };
        }
        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBeDefined();
        expect(Array.isArray(result)).toBe(true);
    });

    test('Visitor basic functionality', () => {
        const basicSql = 'SELECT * FROM root.sg1.*';
        const basicParseTree = iotdbTree.parse(basicSql);

        class BasicVisitor extends IoTDBSqlParserVisitor<string> {
            defaultResult(): string {
                return '';
            }

            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
        }

        const visitor = new BasicVisitor();
        const result = visitor.visit(basicParseTree);
        expect(typeof result).toBe('string');
    });
});
