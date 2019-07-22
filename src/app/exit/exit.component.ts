import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': '' }
})
export class ExitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
