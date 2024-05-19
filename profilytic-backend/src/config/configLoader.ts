// src/config/configLoader.ts
import dotenv from 'dotenv';
import path from 'path';

// Determine the correct .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
const envPath = path.resolve(__dirname, '../../', envFile);

console.log(`Loading environment variables from ${envPath}`);
dotenv.config({ path: envPath });

interface Config {
  temporalTaskQueue: string;
  temporalAddress: string;
  temporalNamespace: string; // Add temporalNamespace
  temporalUsername: string;
  temporalPassword: string;
  sendPulseApiUserId: string;
  sendPulseApiSecret: string;
  sendPulseSenderEmail: string;
  sendPulseSenderName: string;
  mongoDbUsername: string;
  mongoDbPassword: string;
  mongoDbCluster: string;
  mongoDbAppName: string;
  [key: string]: string;
}

// Validate required environment variables
const requiredEnvVars = [
  'TEMPORAL_TASK_QUEUE',
  'TEMPORAL_ADDRESS',
  'TEMPORAL_NAMESPACE', // Add temporalNamespace
  'TEMPORAL_USERNAME',
  'TEMPORAL_PASSWORD',
  'SENDPULSE_API_USER_ID',
  'SENDPULSE_API_SECRET',
  'SENDPULSE_SENDER_EMAIL',
  'SENDPULSE_SENDER_NAME',
  'MONGODB_USERNAME',
  'MONGODB_PASSWORD',
  'MONGODB_CLUSTER',
  'MONGODB_APPNAME'
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is not defined`);
  }
});

// Export configuration
const config: Config = {
  temporalTaskQueue: process.env.TEMPORAL_TASK_QUEUE as string,
  temporalAddress: process.env.TEMPORAL_ADDRESS as string,
  temporalNamespace: process.env.TEMPORAL_NAMESPACE as string, // Add temporalNamespace
  temporalUsername: process.env.TEMPORAL_USERNAME as string,
  temporalPassword: process.env.TEMPORAL_PASSWORD as string,
  sendPulseApiUserId: process.env.SENDPULSE_API_USER_ID as string,
  sendPulseApiSecret: process.env.SENDPULSE_API_SECRET as string,
  sendPulseSenderEmail: process.env.SENDPULSE_SENDER_EMAIL as string,
  sendPulseSenderName: process.env.SENDPULSE_SENDER_NAME as string,
  mongoDbUsername: process.env.MONGODB_USERNAME as string,
  mongoDbPassword: process.env.MONGODB_PASSWORD as string,
  mongoDbCluster: process.env.MONGODB_CLUSTER as string,
  mongoDbAppName: process.env.MONGODB_APPNAME as string
};

export default config;
