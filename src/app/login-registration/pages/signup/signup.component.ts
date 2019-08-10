import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form: FormGroup;
  //emailFormControl: FormControl;
  constructor(){

  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('test')
    });
  }

}
