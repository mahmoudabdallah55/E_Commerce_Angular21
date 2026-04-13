import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MaterialModule } from '../../shared/modules/material/material-module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  form!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

ngOnInit():void {
  this.initFormModels()
}


singnIn():void {
  if(this.form.valid){
    console.log("form values:",this.form.value)
}
}


private initFormModels() : void {
  this.form = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    rememberMe:[false]
  })
}

}
