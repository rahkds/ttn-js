import mysql from "mysql";

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
 
  