import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @ViewChild('userform', { static: false })
  newForm!: NgForm;
  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private route:Router) { }

  id!:number;

  editUser!: User;

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params=>{
      this.id=params['id']
    });
    setTimeout(()=>{
      this.editUser=this.userService.SelectedUserDisplay(this.id);
      this.newForm.form.patchValue({
        uname:this.editUser.uname,
        email:this.editUser.email,
        contact:this.editUser.contact,
        designation:this.editUser.designation
      });
    }, )



  }


  UpdateUser(f:NgForm)
  {
    const UpdatedUserDetails=new User(f.value.uname,f.value.email,f.value.contact,f.value.designation);
    this.userService.UpdateUserDetail(this.id,UpdatedUserDetails);
    alert('data Updated');
    this.route.navigateByUrl('/user');

  }
}
