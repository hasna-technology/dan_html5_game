import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private general:GeneralService, private router:Router) { }

  ngOnInit() {

}
fames=[
  {
    username:"sam",
    score:"2000",
    country:"IND",
    email:""
  },
  {
    username:"tom",
    score:"2500",
    country:"UAE",
    email:""
  },
  {
    username:"bob",
    score:"2200",
    country:"SA"

  },
];
onClickMe(){
  this.router.navigateByUrl('signup');
}
nothanks(){
  this.router.navigateByUrl('home');
}
}
