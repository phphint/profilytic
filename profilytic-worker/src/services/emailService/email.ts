import { emailManagement } from '../../workflows/emailManagement';

export const emailService = {
  sendWelcomeEmail: async (email: string) => {
    await emailManagement.sendWelcomeEmail(email);
  },

  sendPasswordResetEmail: async (email: string, resetLink: string) => {
    await emailManagement.sendPasswordResetEmail(email, resetLink);
  }
};
