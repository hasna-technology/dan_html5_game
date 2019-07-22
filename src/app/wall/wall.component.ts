import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': '' }
})
export class WallComponent implements OnInit {

  constructor() { }
  wall= [
    {
      name:"Dr Cool",
      country: "Sachsen",
      score : 9853
    },
    {
      name:"refKid",
      country: "Turkey",
      score : 8996
    },
    {
      name:"Grumpy76",
      country: "Hull",
      score : 8752
    },
    {
      name:"duh_Man",
      country: "Denmark",
      score : 8652
    },
    {
      name:"98xBummer",
      country: "France_Lille",
      score : 8501
    }
  ];
  ngOnInit() {
  }

}
