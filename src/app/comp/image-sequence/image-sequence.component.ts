import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-image-sequence',
  template: 
  `{{imagepath + image_no}}.jpg
   <div class="image-sequence">
      <img *ngFor="let item of numbers" [hidden]="item != image_no" src="{{imagepath + item}}.jpg" />
   </div>
  `,
  styles:
  [
    `
      .image-sequence
      {
        width: 100%;
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:-1;
      }
      .image-sequence img
      {
        width:100%;
      }
    `
  ] 
  
})
export class ImageSequenceComponent implements OnInit {

  constructor() { }

  imagepath="assets/image/icf_XR.3/0_"
  totalimage=59;
  numbers;
  image_no = 0;
  ngOnInit() {
    console.log("totalimage ", this.totalimage);
    this.numbers =  Array(this.totalimage).fill(0).map((x,i)=>i);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.image_no = Math.floor(e.screenX / window.innerWidth * this.totalimage);
    console.log(this.image_no);
  }
}
