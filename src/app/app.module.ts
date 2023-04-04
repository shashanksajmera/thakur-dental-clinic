import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetTheTeamComponent } from './pages/meet-the-team/meet-the-team.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { MoreComponent } from './pages/more/more.component';
import { PatientEducationComponent } from './pages/patient-education/patient-education.component';
import { ChatWithUsComponent } from './layout/chat-with-us/chat-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MeetTheTeamComponent,
    ServicesComponent,
    TestimonialsComponent,
    MoreComponent,
    PatientEducationComponent,
    ChatWithUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
