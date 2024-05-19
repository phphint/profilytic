import { defineSignal, setHandler, startChild } from '@temporalio/workflow';

export const contentValidWorkflow = async (content: string): Promise<boolean> => {
  // Dummy logic to simulate content validation
  return content.length > 0;
};
