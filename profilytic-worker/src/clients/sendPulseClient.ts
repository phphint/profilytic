import axios from 'axios';

const SENDPULSE_API_URL = 'https://api.sendpulse.com';
const { SENDPULSE_API_USER, SENDPULSE_API_SECRET } = process.env;

if (!SENDPULSE_API_USER || !SENDPULSE_API_SECRET) {
  throw new Error('SendPulse API credentials are not defined in environment variables');
}

const getToken = async (): Promise<string> => {
  const response = await axios.post(`${SENDPULSE_API_URL}/oauth/access_token`, {
    grant_type: 'client_credentials',
    client_id: SENDPULSE_API_USER,
    client_secret: SENDPULSE_API_SECRET
  });
  return response.data.access_token;
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

  const response = await axios.post(
    `${SENDPULSE_API_URL}/smtp/emails`,
    emailData,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  if (response.status !== 200) {
    throw new Error(`Failed to send email: ${response.statusText}`);
  }
};
