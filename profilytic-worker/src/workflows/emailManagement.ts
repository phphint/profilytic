import { proxyActivities } from '@temporalio/workflow';
import type { emailNotificationActivity } from '../activities/emailNotificationActivity';

const { sendWelcomeEmail, sendPasswordResetEmail } = proxyActivities<typeof emailNotificationActivity>({
  startToCloseTimeout: '1 minute'
});

export const emailManagement = {
  sendWelcomeEmail: async (to: string) => {
    await sendWelcomeEmail(to);
  },

  sendPasswordResetEmail: async (to: string, resetLink: string) => {
    await sendPasswordResetEmail(to, resetLink);
  }
};
