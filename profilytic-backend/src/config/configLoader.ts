import dotenv from 'dotenv';
import path from 'path';

// Determine the correct .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
const envPath = path.resolve(__dirname, '../../', envFile);

dotenv.config({ path: envPath });

interface Config {
  temporalTaskQueue: string;
  sendPulseApiUserId: string;
  sendPulseApiSecret: string;
  sendPulseSenderEmail: string;
  sendPulseSenderName: string;
  mongoDbUri: string;
  [key: string]: string;
}

// Validate required environment variables
const requiredEnvVars = [
  'TEMPORAL_TASK_QUEUE',
  'SENDPULSE_API_USER_ID',
  'SENDPULSE_API_SECRET',
  'SENDPULSE_SENDER_EMAIL',
  'SENDPULSE_SENDER_NAME',
  'MONGODB_URI'
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is not defined`);
  }
});

// Export configuration
const config: Config = {
  temporalTaskQueue: process.env.TEMPORAL_TASK_QUEUE as string,
  sendPulseApiUserId: process.env.SENDPULSE_API_USER_ID as string,
  sendPulseApiSecret: process.env.SENDPULSE_API_SECRET as string,
  sendPulseSenderEmail: process.env.SENDPULSE_SENDER_EMAIL as string,
  sendPulseSenderName: process.env.SENDPULSE_SENDER_NAME as string,
  mongoDbUri: process.env.MONGODB_URI as string
};

export default config;
