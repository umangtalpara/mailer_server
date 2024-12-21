import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  async sendMail(
    toEmail: string,
    subject: string,
    message: string,
  ): Promise<void> {
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: toEmail,
      subject: subject,
      text: message,
    };

    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      const res = await transporter.sendMail(mailOptions);
      console.log('email sent successfully!', res);
    } catch (error) {
      console.error('Error sending  email:', error);
      throw ('Error sending  email')
    }
  }
}
