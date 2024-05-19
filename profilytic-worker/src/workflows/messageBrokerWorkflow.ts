import { defineSignal, setHandler, startChild } from '@temporalio/workflow';

export const messageBrokerWorkflow = async (message: string): Promise<void> => {
  // Dummy logic to simulate sending a message to a broker
  console.log(`Sending message to broker: ${message}`);
};
