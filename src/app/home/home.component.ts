import { Component, OnInit, HostListener } from '@angular/core';
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
   /*image_no = 18;
  imagepath="assets/image/icf_XR.3/0_"
  totalimage = 6;
  numbers =  Array(this.totalimage).fill(0).map((x,i)=>i +18);

 @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.image_no = Math.floor(e.screenX / window.innerWidth * this.totalimage) + 18;
    console.log(this.image_no);
  }*/
  
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
  step_2 = true;
  step_3 = false;
  selectedLang;
  show_list = false;
  setContent(lang){
    this.selectedLang = lang
    this.service.getJson(lang);
    this.show_list = false
    this.goto('step_2')
  }
  
  getLanguage(code){
    return this.languages.filter(item => item.code === code)[0].name;
  }

  goto(step){
    switch(step){
      case 'step_2':
        this.step_2 = true;
        break;
      case 'step_3':
        this.step_2 = false;
        this.step_3 = true;
        break;
    }
  }
}
