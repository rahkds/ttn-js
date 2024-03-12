import './../init';
import { ReadFileResp } from '../utils/csv/csv.type';
import {csvUtilObj} from './../utils/csv/csv.util'
import { getDataStore } from '../utils/mysql/mysql.util';


// describe('csv module', () => {
//     test("csvFileFromS3 Test Case", async () => {
//         let csvData:ReadFileResp = await csvUtilObj.readFileFromS3("monthlyinvoice", 'dummy_migration_data.csv');
//         expect(csvData.data.length).toBeGreaterThan(0);
//     })
// });


describe('mysql module', () => {
    test("mysql test connection", async(done) => {
        const rows = await getDataStore("master").execQuery('select "rahul" as name;');
        expect(rows).toBe(1);
        //done();
    });
});

