import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { OctoprintVAComponent } from './octoprint-va/octoprint-va.component';
import { OctoprintVaTosComponent } from './octoprint-va-tos/octoprint-va-tos.component';
import { OctoprintVaPrivacyComponent } from './octoprint-va-privacy/octoprint-va-privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OctoprintVAComponent,
    OctoprintVaTosComponent,
    OctoprintVaPrivacyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'octoprintva', component: OctoprintVAComponent},
      {path: 'octoprintva/tos', component: OctoprintVaTosComponent},
      {path: 'octoprintva/privacy', component: OctoprintVaPrivacyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
