import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeetTheTeamComponent } from './pages/meet-the-team/meet-the-team.component';
import { MoreComponent } from './pages/more/more.component';
import { PatientEducationComponent } from './pages/patient-education/patient-education.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meet-the-team', component: MeetTheTeamComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'more', component: MoreComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'patient-education', component: PatientEducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
