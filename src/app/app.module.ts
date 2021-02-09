import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OctoprintComponent } from './octoprint/octoprint.component';
import { ScottsapplianceComponent } from './scottsappliance/scottsappliance.component';
import { OctoprintPrivacyComponent } from './octoprint-privacy/octoprint-privacy.component';
import { OctoprintTosComponent } from './octoprint-tos/octoprint-tos.component';
import { EmailMeComponent } from './email-me/email-me.component';
import {RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OctoprintComponent,
    ScottsapplianceComponent,
    OctoprintPrivacyComponent,
    OctoprintTosComponent,
    EmailMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
