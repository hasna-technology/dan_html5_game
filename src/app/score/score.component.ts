import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor( public service:GeneralService) { }
  mbp_ref = this.service.get_mbp();
  lbp_ref = this.service.get_lbp();
  lbp_score = 0;
  mbp_score = 0;
  ngOnInit() {
    this.service.setRandomScore(this.mbp_ref);
    this.service.setRandomScore(this.lbp_ref);
    this.mbp_score = this.service.componentScore(this.mbp_ref);
    this.lbp_score = this.service.componentScore(this.lbp_ref);
  }
  getScore(){
    return this.mbp_score+this.lbp_score;
  }
}
