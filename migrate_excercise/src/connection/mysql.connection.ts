import mysql from "mysql";

/*

MYSQL_MASTER_DB_HOST=localhost
MYSQL_MASTER_DB_USER=root
MYSQL_MASTER_DB_PASS=Rah$Ttn123
MYSQL_MASTER_DB_NAME=barry

MYSQL_SLAVE_DB_HOST=localhost
MYSQL_SLAVE_DB_USER=root
MYSQL_SLAVE_DB_PASS=Rah$Ttn123
MYSQL_SLAVE_DB_NAME=barry

*/
export const masterPool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.MYSQL_MASTER_DB_HOST,
    user            : process.env.MYSQL_MASTER_DB_USER,
    password        : process.env.MYSQL_MASTER_DB_PASS,
    database        : process.env.MYSQL_MASTER_DB_NAME
});

export const slavePool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.MYSQL_SLAVE_DB_HOST,
    user            : process.env.MYSQL_SLAVE_DB_USER,
    password        : process.env.MYSQL_SLAVE_DB_PASS,
    database        : process.env.MYSQL_SLAVE_DB_NAME
});

console.log({
    connectionLimit : 10,
    host            : process.env.MYSQL_MASTER_DB_HOST,
    user            : process.env.MYSQL_MASTER_DB_USER,
    password        : process.env.MYSQL_MASTER_DB_PASS,
    database        : process.env.MYSQL_MASTER_DB_NAME
});
 
  