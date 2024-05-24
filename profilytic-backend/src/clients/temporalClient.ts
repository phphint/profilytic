import { Connection, WorkflowClient } from '@temporalio/client';
import config from '../config/configLoader';

const { temporalAddress } = config;

let workflowClient: WorkflowClient | null = null;

async function connectToTemporal(): Promise<Connection> {
  console.log(`Attempting to connect to Temporal server at ${temporalAddress}`);
  const connection = await Connection.connect({
    address: temporalAddress,
    tls: false,
    connectTimeout: 10000, // 10 seconds timeout
  });
  console.log('Connection established');
  return connection;
}

export async function createTemporalClient(): Promise<void> {
  if (!workflowClient) {
    const connection = await connectToTemporal();
    workflowClient = new WorkflowClient({
      connection,
    });
    console.log('Connected to Temporal at', temporalAddress);
  }
}

export function getWorkflowClient(): WorkflowClient {
  if (!workflowClient) {
    throw new Error('WorkflowClient has not been initialized. Call createTemporalClient first.');
  }
  return workflowClient;
}
