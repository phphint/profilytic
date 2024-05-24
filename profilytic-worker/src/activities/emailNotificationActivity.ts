import fs from 'fs';
import path from 'path';
import { sendEmail } from '../clients/sendPulseClient';

export const emailNotificationActivity = {
  sendWelcomeEmail: async (to: string) => {
    console.log(`[DEBUG] sendWelcomeEmail activity called with to: ${to}`);
    try {
      console.log('[DEBUG] Loading email templates');
      const html = fs.readFileSync(path.resolve(__dirname, '../templates/welcomeEmail.html'), 'utf-8');
      const text = fs.readFileSync(path.resolve(__dirname, '../templates/welcomeEmail.txt'), 'utf-8');
      const logoPath = path.resolve(__dirname, '../assets/logo.svg');
      const logoContent = fs.readFileSync(logoPath);

      console.log(`[DEBUG] Email content loaded for sendWelcomeEmail to: ${to}`);
      
      console.log('[DEBUG] Sending email via sendEmail function');
      await sendEmail(to, 'Welcome to Profilytic', html, text);
      console.log(`[DEBUG] sendWelcomeEmail successfully sent to: ${to}`);
    } catch (error) {
      console.error(`[ERROR] sendWelcomeEmail failed for to: ${to}, error: ${error}`);
      throw error;
    }
  },



  sendPasswordResetEmail: async (to: string, resetLink: string) => {
    console.log(`[DEBUG] sendPasswordResetEmail activity called with to: ${to}, resetLink: ${resetLink}`);
    try {
      console.log('[DEBUG] Loading email templates');
      let html = fs.readFileSync(path.resolve(__dirname, '../templates/passwordResetEmail.html'), 'utf-8');
      let text = fs.readFileSync(path.resolve(__dirname, '../templates/passwordResetEmail.txt'), 'utf-8');
      html = html.replace('{{resetLink}}', resetLink);
      text = text.replace('{{resetLink}}', resetLink);

      console.log(`[DEBUG] Email content loaded and updated for sendPasswordResetEmail to: ${to}`);
      
      console.log('[DEBUG] Sending email via sendEmail function');
      await sendEmail(to, 'Password Reset Request', html, text);
      console.log(`[DEBUG] sendPasswordResetEmail successfully sent to: ${to}`);
    } catch (error) {
      console.error(`[ERROR] sendPasswordResetEmail failed for to: ${to}, resetLink: ${resetLink}, error: ${error}`);
      throw error;
    }
  }
};
