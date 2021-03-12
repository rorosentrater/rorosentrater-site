import { Component, OnInit } from '@angular/core';
import {RecaptchaService} from '../services/recaptcha/recaptcha.service';
import {EmailService} from '../services/email/email.service';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.scss']
})
export class EmailMeComponent implements OnInit {

  constructor(private recaptchaService: RecaptchaService, private emailService: EmailService) { }

  // captcha = 'true';
  captcha;
  recaptchaResult;
  resolved(captchaResponse: string) {
    console.log(`Frontend captcha token: ${captchaResponse}`);
    this.captcha = captchaResponse;
    if (captchaResponse) { // captchaResponse is set to null on timeout so only req if we have a token
      this.recaptchaService.checkRecaptcha(captchaResponse).subscribe(data => console.log('Backend response:', data));
    }
  }

  submit(formData) {
    console.log('formData:');
    console.log(formData);
    console.log('captcha token:');
    console.log(this.captcha);
    this.emailService.sendEmail(
      formData.value.fname,
      formData.value.lname,
      formData.value.email,
      formData.value.phone,
      formData.value.message,
      this.captcha
      ).subscribe(data => console.log('Backend response:', data));
  }

  ngOnInit(): void {
  }


}
