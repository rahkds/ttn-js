import Joi from 'joi';
import * as mysqlUtil from '../../utils/mysql/mysql.util';
import {userJoiSchema} from '../../validators/user.validator';

export const addUserData = async (userArray : any[]) : Promise<any[]> => {
    const statusArr : any[] = [];
    const insertSql = `INSERT INTO barry_users(source, account_number, first_name, last_name, customer_number, case_reference, alert_trigger_date,
        triggered_by_rule, record_type, notes, senior_analyst_user_id, investigating_analyst_user_id, case_outcome, category_of_match, attachments) 
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE source = VALUES(source), account_number = VALUES(account_number), 
    first_name = VALUES(first_name),last_name = VALUES(last_name), customer_number = VALUES(customer_number),
     case_reference = VALUES(case_reference), alert_trigger_date = VALUES(alert_trigger_date), triggered_by_rule = VALUES(triggered_by_rule), 
     record_type = VALUES(record_type), notes = VALUES(notes), senior_analyst_user_id = VALUES(senior_analyst_user_id), 
     investigating_analyst_user_id = VALUES(investigating_analyst_user_id), case_outcome = VALUES(case_outcome), 
     category_of_match = VALUES(category_of_match), attachments = VALUES(attachments);`;
    for(let userInfo of userArray) {
        try {
            const {error , value } : {error : Joi.ValidationError, value : any} = userJoiSchema.validate(userInfo);
            if(error) {
                const errMsg = error.details && error.details[0].message || '';
                statusArr.push({status : 'error', errMsg : errMsg});
                continue;
            }

            let alert_trigger_date = null;
            if(userInfo.alert_trigger_date) {
                alert_trigger_date = userInfo.alert_trigger_date.split('/').reverse().join('-');
            }
  
            await mysqlUtil.getDataStore("master").execQuery(insertSql, [
                userInfo.source,
                userInfo.account_number,
                userInfo.first_name,
                userInfo.last_name,
                userInfo.customer_number,
                userInfo.case_reference,
                alert_trigger_date,
                userInfo.triggered_by_rule,
                userInfo.record_type,
                userInfo.notes,
                userInfo.senior_analyst_user_id,
                userInfo.investigating_analyst_user_id,
                userInfo.case_outcome,
                userInfo.category_of_match,
                userInfo.attachments,
            ]);
            statusArr.push({status : 'success', errMsg : null});
        } catch (error) {
            statusArr.push({status : 'error', errMsg : error.toString()});
        }
       
    }
    return statusArr;
}