import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/tokenManagementActivity';

const { manageTokens } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function tokenWorkflow(userId: string, action: string): Promise<void> {
  await manageTokens(userId, action);
}
