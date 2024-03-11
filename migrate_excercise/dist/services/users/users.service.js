"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.addUserData = void 0;
const mysqlUtil = __importStar(require("../../utils/mysql/mysql.util"));
const user_validator_1 = require("../../validators/user.validator");
const addUserData = (userArray) => __awaiter(void 0, void 0, void 0, function* () {
    userArray = userArray.slice(0, 5);
    for (let userInfo of userArray) {
        try {
            userInfo['status_info'] = {
                status: 'success',
                errMsg: null
            };
            const { error, value } = user_validator_1.userJoiSchema.validate(userInfo);
            if (error) {
                const errMsg = error.details && error.details[0].message || '';
                userInfo['status_info']['status'] = 'error';
                userInfo['status_info']['errMsg'] = errMsg;
                continue;
            }
            // console.error("userJoiSchema == ", error);
            let insertSql = `INSERT INTO barry_users(case_reference, account_number, first_name, customer_number, case_outcome) 
            VALUES(?,?,?,?,?);`;
            let rows = yield mysqlUtil.getDataStore("master").execQuery(insertSql, [
                userInfo.case_reference,
                userInfo.account_number,
                userInfo.first_name,
                userInfo.customer_number,
                userInfo.case_outcome,
            ]);
            console.log(rows);
        }
        catch (error) {
            // console.error("Error ==== ", error);
            userInfo['status_info']['status'] = 'error';
            userInfo['status_info']['errMsg'] = error.toString();
        }
        return userArray;
    }
});
exports.addUserData = addUserData;
//# sourceMappingURL=users.service.js.map