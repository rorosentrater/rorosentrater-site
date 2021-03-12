import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendEmail(fname: string, lname: string, email: string, phone: string, message: string, recaptcha_token: string): Observable<object> {
    console.log('email service sendEmail');
    console.log(lname);
    console.log(email);
    console.log(phone);
    console.log(message);
    console.log(recaptcha_token);
    return this.http.post(environment.backendEndpoint + '/message', {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
      recaptcha_token: recaptcha_token
    });
  }
}
