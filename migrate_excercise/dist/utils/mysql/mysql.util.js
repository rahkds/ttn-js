"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataStore = void 0;
const mysql_connection_1 = require("./../../connection/mysql.connection");
const getDataStore = (connectionType = 'slave') => {
    const pool = connectionType == 'slave' ? mysql_connection_1.slavePool : mysql_connection_1.masterPool;
    return {
        pool,
        execQuery: (query, params = []) => {
            return new Promise((resolve, reject) => {
                pool.query(query, params, (error, results, fields) => {
                    if (error)
                        reject(error);
                    return resolve(results);
                });
            });
        }
    };
};
exports.getDataStore = getDataStore;
//# sourceMappingURL=mysql.util.js.map