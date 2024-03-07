import {csvUtilObj} from '../utils/csv/csv.util';
import {ReadFileResp} from '../utils/csv/csv.type'
import * as mysqlUtil from '../utils/mysql/mysql.util'

export const migrationStart = async () => {
    try {
        let data:ReadFileResp = await csvUtilObj.readFile('/home/rahul/Downloads/dummy_migration_data.csv');
        let rows = await mysqlUtil.getDataStore("master").execQuery("select * from users");
        console.log("rows === ", rows);
    } catch (error) {
        console.error("Error", error);
    }
}