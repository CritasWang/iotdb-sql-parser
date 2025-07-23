import { IoTDBTableSQL, IoTDBTableSqlSplitListener } from 'src/parser/iotdb-table';
import { RelationalSqlListener } from 'src/lib/iotdb-table/RelationalSqlListener';

const validSQL1 = `INSERT INTO country_page_view VALUES ('Chinese', 'mumiao', 18), ('American', 'george', 22)`;
const validSQL2 = 'SELECT * FROM tb';
const inValidSQL = 'CREATE TABLE VALUES';

describe('IoTDBTableSQL ErrorStrategy test', () => {
    const iotdbTableSQL = new IoTDBTableSQL();

    test('Parse with error recovery', () => {
        const sql = [validSQL1, inValidSQL, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = iotdbTableSQL.parse(sql, () => {});
        const splitListener = new IoTDBTableSqlSplitListener();
        iotdbTableSQL.listen(splitListener as RelationalSqlListener, parseTree);

        // Check that we have statements and some have errors
        expect(splitListener.statementsContext.length).toBeGreaterThan(0);

        const hasErrors = splitListener.statementsContext.some((item) => item.exception !== null);
        expect(hasErrors).toBe(true);
    });

    test('Validate error detection', () => {
        const errors = iotdbTableSQL.validate(inValidSQL);
        expect(errors.length).toBeGreaterThan(0);
    });

    test('Validate correct SQL', () => {
        const errors = iotdbTableSQL.validate(validSQL2);
        expect(errors.length).toBe(0);
    });
});
