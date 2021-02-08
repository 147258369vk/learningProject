import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(private Userservice:UserService) {}

  users!: User[];
  private subscription!: Subscription;


  ngOnInit(){
    this.users=this.Userservice.showUser();
    console.log(this.users);
    this.subscription=this.Userservice.userChanged.subscribe((user:User[])=>{this.users=user})
    console.log(this.subscription);

  }

  addNewUser(form:NgForm)
  {
    const newUser=new User(form.value.uname,form.value.email,form.value.contact,form.value.designation);
    this.Userservice.addUser(newUser);
    alert("New User Created");
  }
}
