import { Component, OnInit } from '@angular/core';
import {RecaptchaService} from '../services/recaptcha/recaptcha.service';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.css']
})
export class EmailMeComponent implements OnInit {

  constructor(private recaptchaService: RecaptchaService) { }

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

  ngOnInit(): void {
  }


}
