import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.css']
})
export class EmailMeComponent implements OnInit {

  constructor() { }

  // captcha = 'true';
  captcha;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captcha = captchaResponse;
  }

  ngOnInit(): void {
  }


}
