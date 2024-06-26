import { Worker, NativeConnection } from '@temporalio/worker';
import dotenv from 'dotenv';
import { connectToDatabase } from './clients/databaseClient'; // Import the database client
import config from './config/configLoader'; // Import the config loader
import * as emailNotificationActivity from './activities/emailNotificationActivity'; // Import activities

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
        console.log('Max retries reached. Could not connect to Temporal server.');
        throw error;
      }
    }
  }
}

async function createWorker(connection: NativeConnection) {
  try {
    console.log('Starting worker setup...');

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await connectToDatabase();
    console.log('Connected to MongoDB.');

    // Register activities
    const activities = {
      ...emailNotificationActivity.emailNotificationActivity,
    };
    console.log('Registered activities:', activities);

    // Create the Temporal worker with explicitly imported workflows
    console.log('Creating Temporal worker...');
    const worker = await Worker.create({
      connection,
      workflowsPath: require.resolve('./workflows/emailManagement'), // Adjusted to use the correct path
      activities,
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
    } else {
      console.error('Unknown error during worker setup:', err);
    }
    process.exit(1);
  }
}

async function run() {
  while (true) {
    try {
      const connection = await createConnection();
      await createWorker(connection);
      break; // Exit the loop if the worker starts successfully
    } catch (err) {
      console.error('Unhandled error:', err instanceof Error ? err.message : err);
      console.log('Retrying in 10 seconds...');
      await new Promise(res => setTimeout(res, 10000));
    }
  }
}

run();
