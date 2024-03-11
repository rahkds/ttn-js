import {parse} from 'csv-parse';
import fs from "fs";
import {ReadFileResp} from './csv.type';
import {readS3FileStream} from '../aws/aws.util'
class csvUtil {
    // readFile(path:string):Promise<ReadFileResp>  {
    //     return new Promise((resolve, reject) => {
    //         const resp : ReadFileResp = { data : []};
    //         let headers = [];
    //         let rowNumber : number = 0;
    //         fs.createReadStream(path).pipe(parse({ delimiter: ",", from_line: 1 }))
    //         .on("data", (row:any) => {
    //             rowNumber++;
    //             if(rowNumber == 1) {
    //                 headers = row;
    //             } else {
    //                 let info = {};
    //                 row.forEach((elem, idx) => {
    //                     if(headers[idx]) {
    //                         info[headers[idx]] = elem;
    //                     }
    //                 });
    //                 resp.data.push(info);
    //             }
    //          }).on("end", () => {
    //             return resolve(resp);
    //          })
    //     })        
    // }

    readFileFromS3(bucketName:string, key:string):Promise<ReadFileResp>  {
        return new Promise((resolve, reject) => {
            const resp : ReadFileResp = { data : []};
            let headers = [];
            let rowNumber : number = 0;
            readS3FileStream(bucketName,key).pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", (row:any) => {
                rowNumber++;
                if(rowNumber == 1) {
                    headers = row;
                } else {
                    let info = {};
                    row.forEach((elem, idx) => {
                        if(headers[idx]) {
                            info[headers[idx]] = elem;
                        }
                    });
                    resp.data.push(info);
                }
             }).on("end", () => {
                return resolve(resp);
             })
        })        
    }
}

export const csvUtilObj = new csvUtil();
