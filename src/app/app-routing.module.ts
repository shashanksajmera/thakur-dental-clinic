import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeetTheTeamComponent } from './pages/meet-the-team/meet-the-team.component';
import { MoreComponent } from './pages/more/more.component';
import { PatientEducationComponent } from './pages/patient-education/patient-education.component';
// import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ServiceComponent } from './pages/services/service/service.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DefaultRouteReuseStrategy } from './routing';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meet-the-team', component: MeetTheTeamComponent },
  // { path: 'services', component: ServicesComponent },
  { path: 'more', component: MoreComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'patient-education', component: PatientEducationComponent },
  { path: 'services/:service', component: ServiceComponent},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration : 'enabled'
  })],
  exports: [RouterModule],
  providers:[
    {
      provide: RouteReuseStrategy,
      useClass: DefaultRouteReuseStrategy,
    },
  ]
})
export class AppRoutingModule { }
