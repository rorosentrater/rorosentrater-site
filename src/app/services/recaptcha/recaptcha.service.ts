import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor(private http: HttpClient) {
  }

  checkRecaptcha(token: string): Observable<object> {
    // return this.http.post(environment.backendEndpoint + '/recaptcha', {recaptcha_token: token});
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*'
    };
    // return this.http.post(environment.backendEndpoint + '/recaptcha', {recaptcha_token: token}, {headers: corsHeaders});
    return this.http.post(environment.backendEndpoint + '/recaptcha', {recaptcha_token: token});
  }

  // TODO: Remove. just made for testing/CORS debugging
  test(): Observable<object> {
    return this.http.get(environment.backendEndpoint + '/test');
  }
}
