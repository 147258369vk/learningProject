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

  addUser(users:User)
  {
    this.newUser.push(users);
    this.userChanged.next(this.newUser.slice());
  }

  showUser()
  {
    return this.newUser.slice();
  }
}
