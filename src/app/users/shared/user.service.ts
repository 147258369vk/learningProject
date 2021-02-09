import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userChanged  = new Subject<User[]>();

  private newUser:User[]=[
    new User('Harsh','hars@gmail.com','987451236','Developer')
  ]

  constructor() { }

  //Add new User
  addUser(users:User)
  {
    this.newUser.push(users);
    this.userChanged.next(this.newUser.slice());
  }

  //Display all users
  showUser()
  {
    return this.newUser.slice();
  }

  //delete selected user
  DeleteUser(index:number)
  {
    this.newUser.splice(index,1);
    this.userChanged.next(this.newUser.slice())
  }

  //display selectedUser
  SelectedUserDisplay(index:number)
  {
    return this.newUser[index];
  }

  //update details of user
  UpdateUserDetail(index:number,updatedUser:User)
  {
    this.newUser[index]=updatedUser;
    this.userChanged.next(this.newUser.slice());
  }
}
