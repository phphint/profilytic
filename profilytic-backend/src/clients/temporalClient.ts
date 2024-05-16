import { Connection, WorkflowClient } from '@temporalio/client';

let workflowClient: WorkflowClient;

export async function createTemporalClient() {
  // Connect to the Temporal server
  const connection = await Connection.connect();
  
  // Create a WorkflowClient
  workflowClient = new WorkflowClient({ connection });
}

export function getWorkflowClient() {
  if (!workflowClient) {
    throw new Error('WorkflowClient has not been initialized. Call createTemporalClient first.');
  }
  return workflowClient;
}
