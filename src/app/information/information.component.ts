import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private general:GeneralService, private router:Router) { }

  ngOnInit() {

}
}
