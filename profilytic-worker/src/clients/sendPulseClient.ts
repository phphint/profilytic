import axios from 'axios';
import config from '../config/configLoader';

const SENDPULSE_API_URL = 'https://api.sendpulse.com';
const { sendPulseApiUserId, sendPulseApiSecret } = config;

if (!sendPulseApiUserId || !sendPulseApiSecret) {
  throw new Error('SendPulse API credentials are not defined in environment variables');
}

const getToken = async (): Promise<string> => {
  try {
    const response = await axios.post(`${SENDPULSE_API_URL}/oauth/access_token`, {
      grant_type: 'client_credentials',
      client_id: sendPulseApiUserId,
      client_secret: sendPulseApiSecret,
    });
    return response.data.access_token;
  } catch (error) {
    console.error(`[ERROR] Failed to get token from SendPulse: ${error}`);
    throw error;
  }
};

export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  text?: string,
  attachments?: Attachment[],
): Promise<void> => {
  try {
    const token = await getToken();

    const formattedAttachmentsBinary = attachments?.reduce((acc, att) => {
      acc[att.filename] = att.content.toString('base64');
      return acc;
    }, {});

    const emailData = {
      email: {
        html: Buffer.from(html).toString('base64'),
        text,
        subject,
        from: { name: 'Profilytic', email: 'no-reply@profilytic.com' },
        to: [{ email: to }],
        attachments_binary: formattedAttachmentsBinary,
      },
    };

    const response = await axios.post(
      `${SENDPULSE_API_URL}/smtp/emails`,
      emailData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (response.status !== 200) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }
  } catch (error) {
    if (error.response) {
      console.error(`[ERROR] SendPulse API response: ${error.response.data}`);
    }
    console.error(`[ERROR] Error in sendEmail function: ${error}`);
    throw error;
  }
};

// Test the connection and token retrieval at startup
(async () => {
  try {
    const token = await getToken();
    console.log('Successfully connected to SendPulse with token:', token);
  } catch (error) {
    console.error('Failed to connect to SendPulse:', error);
  }
})();
