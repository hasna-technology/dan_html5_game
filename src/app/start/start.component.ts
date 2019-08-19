import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from '../service/general.service';
import anime from 'animejs';


import { moveIn, fallIn } from '../router.animations';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class StartComponent implements OnInit {
  constructor(private http: HttpClient,private route: ActivatedRoute, public service:GeneralService) { }
  wall;
  signIn;
  ngOnInit() {
    let _jsonURL = 'assets/wall.json';
    this.http.get(_jsonURL).subscribe(data => {
      this.wall = data;
    });
    this.http.get('assets/signIn.json').subscribe(data => {
      this.signIn = data;
    });
  }
}
