import axios from 'axios';
import config from '../config/configLoader'; // Make sure this path is correct

const SENDPULSE_API_URL = 'https://api.sendpulse.com';
const { sendPulseApiUserId, sendPulseApiSecret } = config;

if (!sendPulseApiUserId || !sendPulseApiSecret) {
  throw new Error('SendPulse API credentials are not defined in environment variables');
}

const getToken = async (): Promise<string> => {
  try {
    console.log('[DEBUG] Requesting token from SendPulse');
    const response = await axios.post(`${SENDPULSE_API_URL}/oauth/access_token`, {
      grant_type: 'client_credentials',
      client_id: sendPulseApiUserId,
      client_secret: sendPulseApiSecret
    });
    console.log('[DEBUG] Token received from SendPulse');
    return response.data.access_token;
  } catch (error) {
    console.error(`[ERROR] Failed to get token from SendPulse: ${error}`);
    throw error;
  }
};

interface Attachment {
  filename: string;
  content: Buffer;
  cid: string;
}

export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  text?: string,
  attachments?: Attachment[]
): Promise<void> => {
  try {
    console.log(`[DEBUG] Preparing to send email to: ${to}`);
    const token = await getToken();
    const emailData = {
      email: {
        html,
        text,
        subject,
        from: { name: 'Profilytic', email: 'no-reply@profilytic.com' },
        to: [{ email: to }],
        attachments: attachments?.map(att => ({
          name: att.filename,
          content: att.content.toString('base64'),
          type: 'image/svg+xml',
          disposition: 'inline',
          content_id: att.cid
        }))
      }
    };

    console.log(`[DEBUG] Sending email to SendPulse API for: ${to}`);
    const response = await axios.post(
      `${SENDPULSE_API_URL}/smtp/emails`,
      emailData,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    if (response.status !== 200) {
      console.error(`[ERROR] Failed to send email: ${response.statusText}`);
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    console.log(`[DEBUG] Email successfully sent to: ${to}`);
  } catch (error) {
    console.error(`[ERROR] Error in sendEmail function: ${error}`);
    throw error;
  }
};

// Test the connection and token retrieval at startup
(async () => {
  try {
    console.log('[DEBUG] Testing connection to SendPulse');
    const token = await getToken();
    console.log('[DEBUG] Successfully connected to SendPulse with token:', token);
  } catch (error) {
    console.error('[ERROR] Failed to connect to SendPulse:', error);
  }
})();
