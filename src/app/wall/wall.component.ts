import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from '../service/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class WallComponent implements OnInit {
  angForm;
  score = 0;
  submitted;
  success;
  step = 1;
  signup = false;
  countries = this.service.countries;

  constructor(private fb: FormBuilder, private router: Router, public service: GeneralService) {
    this.createForm();
    this.score = this.service.totalScore;
    //console.log(this.service.totalScore);
  }
  ngOnInit() {

    let w = localStorage.getItem('wall');

    if(w != undefined){
      this.wall =  JSON.parse(w);
    }

    if (this.service.user.username != "") {
      this.wall.push({
        name: this.service.user.username,
        country: this.service.getCoutry(this.service.user.country),
        score: this.service.totalScore
      })
      localStorage.setItem('wall', JSON.stringify(this.wall));
      
    }
    this.sortBy('score');
  }

  sortBy(field: string) {

    this.wall.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  createForm() {
    this.angForm = this.fb.group({
      username: [this.service.user.username, Validators.required],
      score: [{ value: this.service.totalScore, disabled: true }, Validators.required],
      country: [this.service.user.country, Validators.required],
      //email:['', Validators.required,Validators.email]
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.angForm.valid) {
      this.signup = true;
      //alert("Thanks for signing up.");

      this.storeSignInForm()

      this.step = 3;
    }

    this.success = true;

  }
  signIn;
  storeSignInForm()
  {
    let s = localStorage.getItem('signIn');

    if(s != undefined){
      this.signIn =  JSON.parse(s);
    }else
    {
      this.signIn = [];
    }

    this.signIn.push({
      username:  this.angForm.controls['username'].value,
      score: this.angForm.controls['score'].value,
      country_code: this.angForm.controls['country'].value,
      country: this.service.getCoutry(this.angForm.controls['country'].value),
      email: this.angForm.controls['email'].value,
      date: new Date()
    })
    localStorage.setItem('signIn', JSON.stringify(this.signIn));
    //this.service.writeFile('signIn', JSON.stringify(this.signIn));
  }


  panel = false;
  openRules() {
    this.panel = true;

  }
  playAgain() {
    this.service.resetGame();
    this.router.navigateByUrl('/home');
  }
  wall = [
    {
      name: "Dr Cool",
      country: "Sachsen",
      score: 8400
    },
    {
      name: "refKid",
      country: "Turkey",
      score: 8400
    },
    {
      name: "Grumpy76",
      country: "Hull",
      score: 8200
    },
    {
      name: "duh_Man",
      country: "Denmark",
      score: 8200
    },
    {
      name: "98xBummer",
      country: "France_Lille",
      score: 8200
    },
    {
      name: "Dr Cool",
      country: "Sachsen",
      score: 8200
    },
    {
      name: "refKid",
      country: "Turkey",
      score: 8000
    },
    {
      name: "Grumpy76",
      country: "Hull",
      score: 8000
    },
    {
      name: "duh_Man",
      country: "Denmark",
      score: 8000
    },
    {
      name: "98xBummer",
      country: "France_Lille",
      score: 8000
    }
  ];

}

