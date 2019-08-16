import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';
import { Router } from '@angular/router';
import { from, generate } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private general: GeneralService, private router: Router, private http:HttpClient) { }
  
  data;
  objectKeys = Object.keys;
  lang = 'fr';
  ngOnInit() {
    let _jsonURL = 'assets/content/' + this.lang +'.json';
    this.http.get(_jsonURL).subscribe(data => {
      this.data = data;
      /*
      for(let item in this._content){
        this._content[item] = "test";
      }*/
     });
    //this.data = this.general._content;
  }
}
