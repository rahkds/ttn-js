import {csvUtilObj} from '../../utils/csv/csv.util';
import {ReadFileResp} from '../../utils/csv/csv.type';
import {addUserData} from '../users/users.service';
import {logger} from '../../utils/logger/logger';

export const migrationStart = async () => {
    try {
        let fileName:string = 's3://monthlyinvoice/dummy_migration_data.csv';
        let csvData:ReadFileResp = await csvUtilObj.readFileFromS3("monthlyinvoice", 'dummy_migration_data.csv');
        let statusArr = await addUserData(csvData.data);
        await logMigrationData(statusArr, fileName);
    } catch (error) {
        console.error("Error", error);
    }
}


const logMigrationData = async(statusArr : any[], fileName: string) => {
    let errorRecordCount = 0;
    let successRecordCount = 0;
    statusArr.forEach((elem, idx) => {
        if(elem && elem['status'] == 'error') {
            logger.log({row_number : idx+1, msg : elem['errMsg']});
            errorRecordCount++;
        } else {
            successRecordCount++;
        }
    });
    let infoObj = {
        migration_file_name : fileName,
        s3_file_path : "",
        migration_triggered_by: "manual",
        no_of_migrated_records : successRecordCount,
        no_of_errored_records : errorRecordCount
    };
    logger.log(infoObj);
}
