import * as mysqlUtil from '../../utils/mysql/mysql.util';


export const addUserData = async (userArray : any) => {
    //console.log(userArray);
    //userArray = userArray.slice(0,5);
    for(let userInfo of userArray) {
        let insertSql = `INSERT INTO barry_users(case_reference, account_number, first_name, customer_number, case_outcome) 
        VALUES(?,?,?,?,?);`;

        let rows = await mysqlUtil.getDataStore("master").execQuery(insertSql, [
            userInfo.case_reference,
            userInfo.account_number,
            userInfo.first_name,
            userInfo.customer_number,
            userInfo.case_outcome,
        ]);
        console.log(rows);
    }

}