"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvUtilObj = void 0;
const csv_parse_1 = require("csv-parse");
const fs_1 = __importDefault(require("fs"));
class csvUtil {
    readFile(path) {
        return new Promise((resolve, reject) => {
            const resp = { data: [] };
            let headers = [];
            let rowNumber = 0;
            fs_1.default.createReadStream(path).pipe((0, csv_parse_1.parse)({ delimiter: ",", from_line: 1 }))
                .on("data", (row) => {
                rowNumber++;
                if (rowNumber == 1) {
                    headers = row;
                }
                else {
                    let info = {};
                    row.forEach((elem, idx) => {
                        if (headers[idx]) {
                            info[headers[idx]] = elem;
                        }
                    });
                    resp.data.push(info);
                }
            }).on("end", () => {
                return resolve(resp);
            });
        });
    }
}
exports.csvUtilObj = new csvUtil();
//# sourceMappingURL=csv.util.js.map