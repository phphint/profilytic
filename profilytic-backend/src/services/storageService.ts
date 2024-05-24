import { storjS3Client } from '../clients/storjS3Client';

class StorageService {
  async uploadFile(bucket: string, fileKey: string, filePath: string): Promise<void> {
    await storjS3Client.upload(bucket, fileKey, filePath);
  }

  async downloadFile(bucket: string, fileKey: string, downloadPath: string): Promise<void> {
    await storjS3Client.download(bucket, fileKey, downloadPath);
  }

  async deleteFile(bucket: string, fileKey: string): Promise<void> {
    await storjS3Client.delete(bucket, fileKey);
  }

  async listFiles(bucket: string): Promise<string[]> {
    return await storjS3Client.listObjects(bucket);
  }
}

export const storageService = new StorageService();
