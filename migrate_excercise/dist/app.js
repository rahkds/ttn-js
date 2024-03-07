"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./init");
const migration_service_1 = require("./services/migration.service");
console.log("MYSQL_MASTER_DB_HOST == ", process.env.MYSQL_MASTER_DB_HOST);
(0, migration_service_1.migrationStart)();
// (async() => {
//     let data:ReadFileResp = await csvUtilObj.readFile('/home/rahul/Downloads/dummy_migration_data.csv');
//     console.log(data);
// })()
//# sourceMappingURL=app.js.map