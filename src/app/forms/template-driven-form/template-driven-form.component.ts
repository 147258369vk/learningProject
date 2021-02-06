import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  constructor() { }
  // user={
  //   username:'',
  //   email:''
  // }

  model:any=[];
    getValue(f:NgForm)
    {
      console.log(f.value);
    }

    onSubmit(form:NgForm)
    {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value));
    }

}
