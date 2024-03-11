import AWS from 'aws-sdk';
import stream from 'stream';

const s3 : AWS.S3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1',
    apiVersion : '2006-03-01'
});


export const readS3FileStream = (bucketName: string, key : string) : stream.Readable => {
    return s3.getObject({
        Bucket : bucketName,
        Key : key
    }).createReadStream();
}