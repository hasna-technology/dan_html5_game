import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { InformationComponent } from './information/information.component';
import { StartComponent } from './start/start.component';
import { ScoreComponent } from './score/score.component';
import { WallComponent } from './wall/wall.component';
import { ExitComponent } from './exit/exit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssessmentComponent,
    SignupComponent,
    InformationComponent,
    StartComponent,
    ScoreComponent,
    WallComponent,
    ExitComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
