import { proxyActivities } from '@temporalio/workflow';
import type { emailNotificationActivity } from '../activities/emailNotificationActivity';

// Define the proxy activities with logging
const { sendWelcomeEmail, sendPasswordResetEmail } = proxyActivities<typeof emailNotificationActivity>({
  startToCloseTimeout: '1 minute'
});

// Export the email management functions with logging
export const emailManagement = {
  sendWelcomeEmail: async (to: string) => {
    console.log(`[DEBUG] sendWelcomeEmail called with to: ${to}`);
    try {
      await sendWelcomeEmail(to);
      console.log(`[DEBUG] sendWelcomeEmail successfully sent to: ${to}`);
    } catch (error) {
      console.error(`[ERROR] sendWelcomeEmail failed for to: ${to}, error: ${error}`);
      throw error;
    }
  },

  sendPasswordResetEmail: async (to: string, resetLink: string) => {
    console.log(`[DEBUG] sendPasswordResetEmail called with to: ${to}, resetLink: ${resetLink}`);
    try {
      await sendPasswordResetEmail(to, resetLink);
      console.log(`[DEBUG] sendPasswordResetEmail successfully sent to: ${to}`);
    } catch (error) {
      console.error(`[ERROR] sendPasswordResetEmail failed for to: ${to}, resetLink: ${resetLink}, error: ${error}`);
      throw error;
    }
  }
};
