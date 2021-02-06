import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  registerForm!: FormGroup;
  submitted=false;



  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      title:['',Validators.required],
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      dob:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      cpassword:['',Validators.required],
      terms:[false,Validators.required]
    },{
      validator:MustMatch('password','cpassword')
    })

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls;}


  onSubmit(){
    this.submitted = true;

    //stop here if form is invalid
    if(this.registerForm.invalid){
      return;
    }

    //display form values on success
    alert('Success !!! \n\n' + JSON.stringify(this.registerForm.value));

  }

  onReset()
  {
    this.submitted=false;
    this.registerForm.reset();
  }
}
