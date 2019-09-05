import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { GeneralService } from '../service/general.service';
import { moveIn, fallIn, fallInLeft } from '../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [moveIn(), fallIn(), fallInLeft()],
  host: { '[@moveIn]': '' }
  //[moveIn(), fallIn()],
  //host: { '[@moveIn]': '' }
})
export class HomeComponent implements OnInit {
  constructor(public service: GeneralService, private router: Router,  private route: ActivatedRoute) { }
  private routeSub: Subscription;
  id;
  step = "step_1";
  
  selected_ref;
  selectedLang;
  panel = false;
  mbp_ref:any = this.service.get_mbp();
  lbp_ref:any = this.service.get_lbp();

  show_list = false;

  ngOnInit() {
    console.log("Mode = " + this.service.mode);
    console.log("version = " + this.service.version);
    let lang = localStorage.getItem('lang');
    if(lang != undefined)
    {
      this.setContent(lang);
    }
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id)
      if(this.id == "1"){
        this.step = 'step_2';
        //this.panel = true;
  
        this.goto('step_3');
        console.log(this.panel)
        console.log(this.step)
      }
    });
  }
  ngAfterViewInit() {
    anime({
      targets: '.animate',
      //translateY: [50, 0],
      opacity: [0, 1],
      delay: function (el, i, l) {
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
      name: 'Brazilian Portuguese',
      code: 'br'
    },
    {
      name: 'French',
      code: 'fr'
    },
    {
      name: 'Spanish',
      code: 'es'
    },
    {
      name:'Polish',
      code:'pl'
    },
    {
      name:'Ukrainian',
      code:'uk'
    },
    {
      name:'German',
      code:'de'
    }
  ]

  setContent(lang) {
    localStorage.setItem('lang', lang);
    this.selectedLang = lang
    this.service.getJson(lang);
    this.show_list = false
    this.goto('step_2')
  }

  getLanguage(code) {
    return this.languages.filter(item => item.code === code)[0].name;
  }

  

  goto(step) {
    /*switch (step) {
      case 'step_2':
        this.panel = false;
        this.step_2 = true;
        this.step_3 = false;
        break;
      case 'step_3':
        this.panel = true;
        //this.step_2 = false;
        this.step_3 = true;
        this.step_4a = false;
        this.step_4b = false;
        break;

      case 'step_4a':
        this.panel = true;
        this.step_3 = false;
        this.step_4a = true;
        break;

      case 'step_4b':
        this.panel = true;
        this.step_3 = false;
        this.step_4b = true;
        break;

      case 'step_5':
        this.panel = true;
        this.step_4a = false;
        this.step_4b = false;
        this.step_5 = true;
        break;
    }*/
  if(step == 'step_2')
      this.panel = false;
  else
    this.panel = true;
    
    this.step = step;

  }

  ref_click(ref){
    let group_name = ref.group
    this.router.navigateByUrl('/assessment/'+group_name + "/" + ref.id);
  }
  getCompletedCount(_ref){
    if(_ref == 'mbp')
      return this.mbp_ref.filter((x, i) => { return x.completed == true; }).length;
    if(_ref == 'lbp')
      return this.lbp_ref.filter((x, i) => { return x.completed == true; }).length;
  }
}
