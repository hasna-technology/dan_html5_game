import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { GeneralService } from '../service/general.service';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {
  
  constructor(public service:GeneralService) {}
  ngOnInit() {
  
   
  }
  ngAfterViewInit(){
      anime({
        targets: '.animate',
        //translateY: [50, 0],
        opacity: [0, 1],
        delay: function(el, i, l) {
          return i * 500;
        },
        duration: 1500
    });
  }
}
