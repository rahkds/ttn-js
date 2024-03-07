import {masterPool, slavePool}  from './../../connection/mysql.connection';



export const getDataStore = (connectionType = 'slave') => {
    const pool = connectionType == 'slave' ? slavePool : masterPool;
    return {
        pool,
        execQuery : (query, params = []) => {
            return new Promise((resolve, reject) => {
                pool.query(query, params, (error, results, fields) => {
                    if (error) reject(error);
                    return resolve(results);
                });
            })
        } 
    }
}