export interface Attachment {
    filename: string;
    content: Buffer;
  }
  
  export interface IEmailNotificationService {
    sendEmail(
      to: string,
      subject: string,
      html: string,
      text?: string,
      attachments?: Attachment[]
    ): Promise<void>;
  }
  