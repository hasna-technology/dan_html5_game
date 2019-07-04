import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) { 
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      score: ['', Validators.required],
      country: ['', Validators.required ],
    //email:['', Validators.required,Validators.email]
      email: ['', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
 ])],
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.angForm.valid) {
      console.log("");  
      return;
    }

    this.success = true;
   
}

  ngOnInit() {}

}
