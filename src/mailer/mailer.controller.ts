import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  async sendMail(
    @Body('toEmail') toEmail: string,
    @Body('subject') subject: string,
    @Body('message') message: string,
  ): Promise<{ message: string }> {
    await this.mailerService.sendMail(toEmail, subject, message);
    return { message: 'Email sent successfully' };
  }
}
