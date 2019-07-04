import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  
   
  }
  ngAfterViewInit(){
    anime({
      targets: '.animate',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: function(el, i, l) {
        return i * 500;
      },
      duration: 1500
  });
  }
}
