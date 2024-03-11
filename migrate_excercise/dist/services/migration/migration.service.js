"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationStart = void 0;
const csv_util_1 = require("../../utils/csv/csv.util");
const users_service_1 = require("../users/users.service");
const migrationStart = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let csvData = yield csv_util_1.csvUtilObj.readFile('/home/rahul/Downloads/dummy_migration_data.csv');
        let userArr = yield (0, users_service_1.addUserData)(csvData.data);
        const totalRecords = userArr.length;
        const errorRecords = userArr.reduce((accum, curr) => {
            if (curr && curr.status_info && curr.status_info['status'] == 'error') {
                return accum + 1;
            }
            return accum;
        }, 0);
        console.log("totalRecords === ", totalRecords);
        console.log("errorRecords === ", errorRecords);
        // let rows = await mysqlUtil.getDataStore("master").execQuery("select * from users");
        // console.log("rows === ", rows);
    }
    catch (error) {
        console.error("Error", error);
    }
});
exports.migrationStart = migrationStart;
//# sourceMappingURL=migration.service.js.map