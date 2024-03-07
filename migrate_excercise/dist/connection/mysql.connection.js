"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slavePool = exports.masterPool = void 0;
const mysql_1 = __importDefault(require("mysql"));
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
exports.masterPool = mysql_1.default.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_MASTER_DB_HOST,
    user: process.env.MYSQL_MASTER_DB_USER,
    password: process.env.MYSQL_MASTER_DB_PASS,
    database: process.env.MYSQL_MASTER_DB_NAME
});
exports.slavePool = mysql_1.default.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_SLAVE_DB_HOST,
    user: process.env.MYSQL_SLAVE_DB_USER,
    password: process.env.MYSQL_SLAVE_DB_PASS,
    database: process.env.MYSQL_SLAVE_DB_NAME
});
console.log({
    connectionLimit: 10,
    host: process.env.MYSQL_MASTER_DB_HOST,
    user: process.env.MYSQL_MASTER_DB_USER,
    password: process.env.MYSQL_MASTER_DB_PASS,
    database: process.env.MYSQL_MASTER_DB_NAME
});
//# sourceMappingURL=mysql.connection.js.map