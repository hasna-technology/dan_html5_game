import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from '../service/general.service';
import anime from 'animejs';
<<<<<<< HEAD
import { moveIn, fallIn } from '../router.animations';
import { Subscription } from 'rxjs';
=======
import { $ } from 'protractor';
>>>>>>> 66db35c05b328aed3a5bd8668679193d0281f9f2

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class StartComponent implements OnInit {

  //state: string = '';
  constructor(private router: Router,private route: ActivatedRoute, public service:GeneralService) { }
  private routeSub: Subscription;
  ref_name;
  id;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      
      this.ref_name = params['ref'];
      this.id = params['id'];

      console.log(this.ref_name) //log the value of id
      if(this.ref_name == "mbp")
      {
        this.step_1_click('mbp')
      }else if(this.ref_name == "lbp")
      {
        this.step_1_click('lbp')
      }

    });
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
