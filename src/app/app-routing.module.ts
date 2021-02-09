import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { PostComponent } from './post/post/post.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'templateform',
    component:TemplateDrivenFormComponent
  },
  {
    path:'reactiveform',
    component:ReactiveFormComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'user',
    component:AddUserComponent
  },
  {
    path:'edit-user',
    component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
