import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';
import { FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from '../service/general.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  showLoader = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private fb: FormBuilder, private router: Router, public service: GeneralService, private httpService: HttpClient) {

    this.score = this.service.totalScore;
    //console.log(this.service.totalScore);
  }
  ngOnInit() {

    if (this.service.mode == "desktop") {
      let w = localStorage.getItem('wall');

      if (w != undefined) {
        this.wall = JSON.parse(w);
        this.wall.forEach(function (element) {
          element.showResult = false;
          element.currentItem = false;
        })
      }
      this.serviceaddCurrentUserData();

    } else {
      this.showLoader = true;
      this.wall = [];
      this.httpService.get('https://localhost:44327/api/wall').subscribe(
        data => {
          console.log(data);
          this.wall = this.convertWallData(data);
          this.showLoader = false;
          this.serviceaddCurrentUserData();
        }
      );

      /*this.service.user.username = "Sam 1"
      this.service.user.country = "IN"
      this.service.totalScore = 1203*/

      if (this.service.user.username != "") {
        console.log("Send Post");

        this.httpService.post('https://localhost:44327/api/wall', {
          name: this.service.user.username,
          country: this.service.getCoutry(this.service.user.country),
          score: this.service.totalScore,
        }, this.httpOptions).subscribe(
          data => {
            console.log("Success Post");
            console.log(data);
          }
        )
      }
    }
  }
  serviceaddCurrentUserData() {
    if (this.service.user.username != "") {
      this.wall.push({
        name: this.service.user.username,
        country: this.service.getCoutry(this.service.user.country),
        score: this.service.totalScore,
        showResult: true,
        currentItem: true
      })
      this.sortBy(this.wall, 'score');
      localStorage.setItem('wall', JSON.stringify(this.wall));
    }
    this.sortBy(this.wall, 'score');
    this.showTop(10);
    this.createForm();
  }
  convertWallData(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      result.push({
        name: item.name,
        country: item.country,
        score: item.score,
        showResult: true,
        currentItem: false
      })
    }
    return result;
  }
  showTop(len: number) {
    len = this.wall.length > len ? len : this.wall.length;
    for (let index = 0; index < len; index++) {
      const element = this.wall[index];
      element.showResult = true;
    }
  }

  sortBy(arr, field: string) {
    arr.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return arr;
  }
  createForm() {
    console.log(this.service.user.username);
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

      this.httpService.post('https://localhost:44327/api/SignUp', {
        name: this.angForm.controls['username'].value,
        score: this.angForm.controls['score'].value,
        countrycode: this.angForm.controls['country'].value,
        emailid: this.angForm.controls['email'].value,
        date: new Date()
      }, this.httpOptions).subscribe(
        data => {
          console.log("Success SignUp");
          console.log(data);
        }
      )

      this.storeSignInForm()

      this.step = 3;
    }

    this.success = true;

  }
  signIn;
  storeSignInForm() {
    let s = localStorage.getItem('signIn');

    if (s != undefined) {
      this.signIn = JSON.parse(s);
    } else {
      this.signIn = [];
    }

    this.signIn.push({
      username: this.angForm.controls['username'].value,
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
      score: 8400,
      showResult: false,
      currentItem: false

    },
    {
      name: "refKid",
      country: "Turkey",
      score: 8400,
      showResult: false,
      currentItem: false
    },
    {
      name: "Grumpy76",
      country: "Hull",
      score: 8200,
      showResult: false,
      currentItem: false
    },
    {
      name: "duh_Man",
      country: "Denmark",
      score: 8200,
      showResult: false,
      currentItem: false
    },
    {
      name: "98xBummer",
      country: "France_Lille",
      score: 8200,
      showResult: false,
      currentItem: false
    },
    {
      name: "Dr Cool",
      country: "Sachsen",
      score: 8200,
      showResult: false,
      currentItem: false
    },
    {
      name: "refKid",
      country: "Turkey",
      score: 8000,
      showResult: false,
      currentItem: false
    },
    {
      name: "Grumpy76",
      country: "Hull",
      score: 8000,
      showResult: false,
      currentItem: false
    },
    {
      name: "duh_Man",
      country: "Denmark",
      score: 8000,
      showResult: false,
      currentItem: false
    },
    {
      name: "98xBummer",
      country: "France_Lille",
      score: 8000,
      showResult: false,
      currentItem: false
    }
  ];

}

