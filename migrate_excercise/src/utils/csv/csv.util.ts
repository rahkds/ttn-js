import {parse} from 'csv-parse';
import fs from "fs";
import {ReadFileResp} from './csv.type';

class csvUtil {
    readFile(path:string):Promise<ReadFileResp>  {
        return new Promise((resolve, reject) => {
            const resp : ReadFileResp = {headers : [], data : []};
            let rowNumber : number = 0;
            fs.createReadStream(path).pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", (row:any) => {
                rowNumber++;
                if(rowNumber == 1) {
                    resp.headers = row;
                } else {
                    resp.data.push(row);
                }
             }).on("end", () => {
                return resolve(resp);
             })
        })        
    }
}

export const csvUtilObj = new csvUtil();
