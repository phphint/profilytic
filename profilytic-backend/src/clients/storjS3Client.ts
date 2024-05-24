import AWS from 'aws-sdk';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const s3 = new AWS.S3({
  endpoint: process.env.STORJ_S3_ENDPOINT,
  accessKeyId: process.env.STORJ_S3_ACCESS_KEY,
  secretAccessKey: process.env.STORJ_S3_SECRET_KEY,
  s3ForcePathStyle: true, // needed with minio?
  signatureVersion: 'v4'
});

class StorjS3Client {
  async upload(bucket: string, fileKey: string, filePath: string): Promise<void> {
    const fs = require('fs');
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', function(err: any) {
      console.log('File Error', err);
    });
    const uploadParams = { Bucket: bucket, Key: fileKey, Body: fileStream };

    await s3.upload(uploadParams).promise();
  }

  async download(bucket: string, fileKey: string, downloadPath: string): Promise<void> {
    const fs = require('fs');
    const downloadParams = { Bucket: bucket, Key: fileKey };
    const file = fs.createWriteStream(downloadPath);

    const data = await s3.getObject(downloadParams).promise();
    file.write(data.Body);
    file.end();
  }

  async delete(bucket: string, fileKey: string): Promise<void> {
    const deleteParams = { Bucket: bucket, Key: fileKey };
    await s3.deleteObject(deleteParams).promise();
  }

  async listObjects(bucket: string): Promise<string[]> {
    const listParams = { Bucket: bucket };
    const data = await s3.listObjectsV2(listParams).promise();
    return data.Contents?.map(item => item.Key) || [];
  }
}

const storjS3Client = new StorjS3Client();
export { storjS3Client };
