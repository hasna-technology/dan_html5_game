import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { SignupComponent } from './signup/signup.component';

import { InformationComponent } from './information/information.component';
import { StartComponent } from './start/start.component';
import { ScoreComponent } from './score/score.component';
import { WallComponent } from './wall/wall.component';
import  { ExitComponent } from './exit/exit.component';

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
    path: "start/:ref/:id",
    component: StartComponent  
  },
  {
    path: "assessment/:ref/:id",
    component: AssessmentComponent  
  },
  {
    path: "score",
    component: ScoreComponent
  },{
    path: "wall",
    component: WallComponent
  },
  {
    path: "form",
    component: SignupComponent  
  },
  {
    path: "exit",
    component: ExitComponent  
  },
  {
    path:"information",
    component:InformationComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
