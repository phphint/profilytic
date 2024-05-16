import fs from 'fs';
import path from 'path';
import { sendEmail } from '../clients/sendPulseClient';

export const emailNotificationActivity = {
  sendWelcomeEmail: async (to: string) => {
    const html = fs.readFileSync(path.resolve(__dirname, '../templates/welcomeEmail.html'), 'utf-8');
    const text = fs.readFileSync(path.resolve(__dirname, '../templates/welcomeEmail.txt'), 'utf-8');
    const logoPath = path.resolve(__dirname, '../assets/logo.svg');
    const logoContent = fs.readFileSync(logoPath);

    await sendEmail(to, 'Welcome to Profilytic', html, text, [
      {
        filename: 'logo.svg',
        content: logoContent,
        cid: 'logo'
      }
    ]);
  },

  sendPasswordResetEmail: async (to: string, resetLink: string) => {
    let html = fs.readFileSync(path.resolve(__dirname, '../templates/passwordResetEmail.html'), 'utf-8');
    let text = fs.readFileSync(path.resolve(__dirname, '../templates/passwordResetEmail.txt'), 'utf-8');
    html = html.replace('{{resetLink}}', resetLink);
    text = text.replace('{{resetLink}}', resetLink);
    await sendEmail(to, 'Password Reset Request', html, text);
  }
};
