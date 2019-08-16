import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GeneralService } from '../service/general.service';
import { moveIn, fallIn } from '../router.animations';
import anime from 'animejs';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class AssessmentComponent implements OnInit {



  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public service: GeneralService, private changeDector: ChangeDetectorRef) { }

  id;
  ref_arr;
  ref_name;
  selected_quiz;

  showPopup = false;
  show_result = false;
  panel = false;
  mbp;
  lbp;
  step = 2;
  ngOnInit() {

    this.createForm();

    this.route.params.subscribe(params => {
      //console.log(params) //log the entire params object

      this.ref_name = params['ref'];
      this.id = params['id'];
      this.mbp = this.service.get_mbp();
      this.lbp = this.service.get_lbp();
      //this.ref_arr = this.service.get_mbp(this.id);
      //console.log(this.ref_name) //log the value of id
      if (this.ref_name == "mbp") {
        this.ref_arr = this.service.get_mbp(this.id);
      } else {
        this.ref_arr = this.service.get_lbp(this.id);
      }
      //this.ref_arr.completed = true;
      this.ref_arr.total = this.getTotalScore(this.ref_arr);
    });
  }


  getTotalScore(arr){
    let sum = 0;
    
    for (let i = 0; i < arr.quiz.length; i++) {
      const item = arr.quiz[i].choices;
      //console.log(item)
      for (let j = 0; j < item.length; j++) {
        const choice = item[j];
        if(choice.correct == true)
        {
          sum += choice.score;
        }
      }
    }
    return sum;
  }

  totalScore;
  total = 8400;
  prev_id = -1;
  onclick(q) {
    this.selected_quiz = q;
    
    if(this.prev_id != q.id){
      this.hideAnswer();
    }
    q.showPopup = !q.showPopup;
    this.prev_id = q.id;
    //this.showPopup = true;
  }
  nextEnable = false;
  countries = this.service.countries;

  angForm;
  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      country: ['0', Validators.required],
    });
  }

  onSubmit() {

    var cnt = 0;
    //var score = 0;
    this.ref_arr.score = 0;

    this.selected_quiz.completed = true;
    this.selected_quiz.showPopup = false;
    this.selected_quiz.submitted = true;

    this.showPopup = false;

    this.ref_arr.score = 0;
    for (var i = 0; i < this.ref_arr.quiz.length; i++) {
      //this.ref_arr.quiz[i].showPopup = false;
      if (this.ref_arr.quiz[i].submitted == true) {
        cnt++;
        this.ref_arr.score += this.ref_arr.quiz[i].choices[this.ref_arr.quiz[i].userchoice].score;
      }
    }
    this.selected_quiz = null;
    this.service.setSetScore(this.ref_arr.score);
    if (this.ref_arr.quiz.length == cnt) {
      this.nextEnable = true;
      this.ref_arr.completed = true;
      this.show_result = true;
    }else
    {
      for (var i = 0; i < this.ref_arr.quiz.length; i++) {
        if (this.ref_arr.quiz[i].submitted != true) {
          //console.log(i, this.ref_arr.quiz[i].showPopup )
          this.selected_quiz = this.ref_arr.quiz[i];
          this.selected_quiz.showPopup = true;
          break;
        }
      }
    }
    
    
  }
  playAgain(){
    this.service.resetGame();
    this.router.navigateByUrl('/home');
  }
  onNext() {

    var completed_count = this.mbp.filter((x, i) => { return x.completed == true; }).length +
                          this.lbp.filter((x, i) => { return x.completed == true; }).length
    var total_count = this.mbp.length + this.lbp.length;
    //console.log(total_count, completed_count)
    this.panel = true;
    if(total_count == completed_count){
      this.step = 2; 
      this.getScore();
    }else{
      let new_id = (Number(this.id) + 1);
      //this.panel = true;
      this.step = 1;
      this.show_result = false;
      for (var i = 0; i < this.ref_arr.quiz.length; i++) {
        this.ref_arr.quiz[i].showPopup = false;
      }
    }

   
  }
  getContent(id) {
    //console.log(id);
    return this.service._content[id];
  }
  noThanks() {
    this.router.navigateByUrl('/information');
  }

  toggleAnswer() {
    this.show_result = !this.show_result;
    //console.log(this.show_result)
    this.hideAnswer();  
  }

  hideAnswer(){
    for (var i = 0; i < this.ref_arr.quiz.length; i++) {
      this.ref_arr.quiz[i].showPopup = false;
    }
  }

  mbp_score;
  lbp_score;
  getScore() {

    this.totalScore = 0;
    this.mbp_score = 0;
    this.lbp_score = 0;
    for (var i = 0; i < this.mbp.length; i++) {
      if (this.mbp[i].score == undefined) {
        this.mbp[i].score = 0;
      }
      this.mbp_score += this.mbp[i].score;
    }

    for (var i = 0; i < this.lbp.length; i++) {
      if (this.lbp[i].score == undefined) {
        this.lbp[i].score = 0;
      }
      this.lbp_score += this.lbp[i].score;
    }
    this.totalScore = this.mbp_score + this.lbp_score;
    this.service.totalScore = this.totalScore;

  }
  choiceClick(q, i) {
    if (this.ref_arr.completed != true) {
      q.userchoice = i;
      q.submitted = false
    }
  }

  onFormSubmit(){
    this.service.user.username =this.angForm.controls['username'].value;
    this.service.user.country = this.angForm.controls['country'].value;
    this.router.navigateByUrl("/wall");
  }

}
