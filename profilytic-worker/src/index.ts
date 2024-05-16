import { Worker } from '@temporalio/worker';
import dotenv from 'dotenv';
import { connectToDatabase } from './clients/databaseClient'; // Import the database client
import config from './config/configLoader'; // Import the config loader

// Load environment variables from .env file
dotenv.config();

async function run() {
  // Connect to MongoDB
  await connectToDatabase();

  // Create a worker with specified task queue, workflows, and activities
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities: {
      // s3UrlFetchActivity: require('./activities/s3UrlFetchActivity').s3UrlFetchActivity, // TEMPORARY COMMENT, DO NOT REMOVE
      // resumeToMarkdownConvertActivity: require('./activities/resumeToMarkdownConvertActivity').resumeToMarkdownConvertActivity, // TEMPORARY COMMENT, DO NOT REMOVE
      // resumeParseActivity: require('./activities/resumeParseActivity').resumeParseActivity, // TEMPORARY COMMENT, DO NOT REMOVE
      // databaseOperationActivity: require('./activities/databaseOperationActivity').databaseOperationActivity, // TEMPORARY COMMENT, DO NOT REMOVE
      emailNotificationActivity: require('./activities/emailNotificationActivity').emailNotificationActivity,
      // statusUpdateActivity: require('./activities/statusUpdateActivity').statusUpdateActivity, // TEMPORARY COMMENT, DO NOT REMOVE
      // tokenManagementActivity: require('./activities/tokenManagementActivity').tokenManagementActivity, // TEMPORARY COMMENT, DO NOT REMOVE
      // messageBrokerActivity: require('./activities/messageBrokerActivity').messageBrokerActivity // TEMPORARY COMMENT, DO NOT REMOVE
    },
    taskQueue: config.temporalTaskQueue,
  });

  // Start the worker
  await worker.run();
}

// Handle any errors
run().catch(err => {
  console.error(err);
  process.exit(1);
});
