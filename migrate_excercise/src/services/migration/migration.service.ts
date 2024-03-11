import {csvUtilObj} from '../../utils/csv/csv.util';
import {ReadFileResp} from '../../utils/csv/csv.type';
import {addUserData} from '../users/users.service';

export const migrationStart = async () => {
    try {
        let csvData:ReadFileResp = await csvUtilObj.readFile('/home/rahul/Downloads/dummy_migration_data.csv');
        addUserData(csvData.data);
        // let rows = await mysqlUtil.getDataStore("master").execQuery("select * from users");
        // console.log("rows === ", rows);
    } catch (error) {
        console.error("Error", error);
    }
}