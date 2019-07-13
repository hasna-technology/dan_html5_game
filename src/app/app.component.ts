import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { GeneralService } from './service/general.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    /*trigger('myAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [style({ 
             opacity: 0,
             position: 'absolute',
            })],
          { optional: true }
        ),
        query(
          ':leave',
           [style({ opacity: 1,
            position: 'absolute',
     }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0,
            position: 'absolute',
            }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])*/
  ] // register the animations

})
export class AppComponent implements OnInit {
  title = 'Danfoss';
  constructor(private service:GeneralService, private route: Router) { }
  
  
  ngOnInit() {

  }
  getScore() {
    return this.service.getScore();
  }

  getGamePage(){
    return this.route.url.indexOf('/assessment') != -1;
  }

languages = [
  {
    name: 'English',
    code: 'en'
  },
  {
    name: 'French',
    code: 'fr'
  },
  {
    name: 'Danish',
    code: 'da'
  },
  {
    name: 'Spanish',
    code: 'es'
  },
  {
    name: 'Chinese',
    code: 'zh'
  }
]
  
selectedLang = 'en';

  setContent(lang){
    this.selectedLang = lang
    this.service.getJson(lang);
  }
  
  getLanguage(code){
    return this.languages.filter(item => item.code === code)[0].name;
  }
}
