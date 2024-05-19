import { Worker, NativeConnection } from '@temporalio/worker';
import dotenv from 'dotenv';
import { connectToDatabase } from './clients/databaseClient'; // Import the database client
import config from './config/configLoader'; // Import the config loader
import path from 'path';
import { createTemporalClient } from './clients/temporalClient'; // Import the Temporal client
import fs from 'fs';

// Load environment variables from .env file
dotenv.config();

async function createConnection() {
  let retries = 5;
  const retryDelay = 5000; // 5 seconds

  while (retries > 0) {
    try {
      console.log('Attempting to connect to Temporal server...');
      const connection = await NativeConnection.connect({
        address: config.temporalAddress,
        tls: false,
      });
      console.log('Connected to Temporal server.');
      return connection;
    } catch (error) {
      console.error('Failed to connect to Temporal server:', error);
      retries -= 1;
      if (retries > 0) {
        console.log(`Retrying connection in ${retryDelay / 1000} seconds...`);
        await new Promise(res => setTimeout(res, retryDelay));
      } else {
        throw new Error('Max retries reached. Could not connect to Temporal server.');
      }
    }
  }
}

async function run() {
  try {
    console.log('Starting worker setup...');

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await connectToDatabase();
    console.log('Connected to MongoDB.');

    // Create Temporal client connection
    console.log('Creating Temporal client connection...');
    const connection = await createConnection();
    console.log('Temporal client connection established.');

    // Log the resolved workflows path
    const workflowsPath = path.resolve(__dirname, 'workflows');
    console.log(`Resolved workflows path: ${workflowsPath}`);

    // Check if the directory exists
    if (!fs.existsSync(workflowsPath)) {
      console.error(`Workflows path does not exist: ${workflowsPath}`);
      process.exit(1);
    } else {
      console.log(`Workflows path exists: ${workflowsPath}`);
    }

    // Create a worker with specified task queue, workflows, and activities
    console.log('Creating Temporal worker...');
    const worker = await Worker.create({
      connection,
      workflowsPath,
      activities: {
        emailNotificationActivity: require('./activities/emailNotificationActivity').emailNotificationActivity,
      },
      taskQueue: config.temporalTaskQueue,
    });

    console.log('Temporal worker created with task queue:', config.temporalTaskQueue);

    // Start the worker
    console.log('Starting Temporal worker...');
    await worker.run();
    console.log('Temporal worker started successfully.');
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error during worker setup:', err.message);
      process.exit(1);
    } else {
      console.error('Unknown error during worker setup:', err);
      process.exit(1);
    }
  }
}

// Handle any errors
run().catch(err => {
  console.error('Unhandled error:', err instanceof Error ? err.message : err);
  process.exit(1);
});
