import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { SignupComponent } from './signup/signup.component';

import { InformationComponent } from './information/information.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent  
  },
  {
    path: "",
    component: HomeComponent  
  },
  {
    path: "start",
    component: StartComponent  
  },
  {
    path: "assessment/:ref/:id",
    component: AssessmentComponent  
  },
  {
    path: "form",
    component: SignupComponent  
  },
  {
    path:"information",
    component:InformationComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
