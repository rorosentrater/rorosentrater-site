import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OctoprintComponent } from './octoprint/octoprint.component';
import { OctoprintPrivacyComponent } from './octoprint-privacy/octoprint-privacy.component';
import { OctoprintTosComponent } from './octoprint-tos/octoprint-tos.component';
import { ScottsapplianceComponent } from './scottsappliance/scottsappliance.component';


const routes: Routes = [
  { path: 'octoprint-alexa', component: OctoprintComponent },
  { path: 'octoprint-alexa/privacy', component: OctoprintPrivacyComponent },
  { path: 'octoprint-alexa/tos', component: OctoprintTosComponent },
  { path: 'scotts-appliance', component: ScottsapplianceComponent },

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route for www.site.com
  { path: '**', redirectTo: '/home'} // Redirects any unknown url to home. MUST BE LAST
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
