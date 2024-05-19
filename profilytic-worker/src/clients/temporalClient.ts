import { Connection, WorkflowClient } from '@temporalio/client';
import config from '../config/configLoader';

const { temporalAddress, temporalTaskQueue } = config;

let workflowClient: WorkflowClient;

export async function createTemporalClient(): Promise<void> {
  try {
    console.log('Attempting to connect to Temporal server at', temporalAddress);

    const connection = await Connection.connect({
      address: temporalAddress,
      tls: false,
    });

    console.log('Connection established');

    workflowClient = new WorkflowClient({
      connection,
    });

    console.log('Connected to Temporal at', temporalAddress);

    // Test the connection by calling describeNamespace via workflowClient
    const namespaceInfo = await workflowClient.connection.workflowService.describeNamespace({ namespace: 'default' });
    console.log('Namespace info:', namespaceInfo);
  } catch (error) {
    console.error('Failed to connect to Temporal server:', error);
    throw error;
  }
}

export function getWorkflowClient(): WorkflowClient {
  if (!workflowClient) {
    throw new Error('WorkflowClient has not been initialized. Call createTemporalClient first.');
  }
  return workflowClient;
}
