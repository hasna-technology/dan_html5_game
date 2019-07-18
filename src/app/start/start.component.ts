import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../service/general.service';
import anime from 'animejs';
import { $ } from 'protractor';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


  constructor(private router: Router, private service:GeneralService) { }

  ngOnInit() {
  }

  mbp_ref = this.service.get_mbp();
  lbp_ref = this.service.get_lbp();
  
  step1_id;
  step2_id;
  ref_click(ref, id){
      this.router.navigateByUrl('/assessment/'+ref + "/" + id);
  }

  step2_click(id){    
    this.step2_id = id;
    this.show('.step3')
  }

  step_1_click(t){
    this.step1_id = t; 
    this.step2_id = -1;
    this.show('.step2') ; 
    this.hide('.step3')
  }
  show(selector){
    console.log((document.querySelector(selector) as HTMLElement).style.opacity);
    let opacity = (document.querySelector(selector) as HTMLElement).style.opacity
    if(opacity == '' || opacity == '0'){
      anime({
          targets: selector,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 1500
      });
    }
  }
  hide(selector){
    (document.querySelector(selector) as HTMLElement).style.opacity = '0';
  }
  
}
