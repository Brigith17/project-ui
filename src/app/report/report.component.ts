import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';
import { UserType, CreateUserDto } from '../shared/types';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit  {
  users: Array<UserType>=[];
  userselected: UserType={};
  searchUser!:string;
  constructor(private userService:UserService){}
  
  ngOnInit(): void {
  this.loadUsers();
  }

  /**
   * This method get data of user service
   */
  loadUsers(){
    this.userService.getUsers().subscribe((res) => {
      this.getElements(res);
    }),
      (error: any) =>
        alert(error);
  }

  /**
   * Get users of data list of GitHub service
   * @param listUsers 
   */
  getElements(listUsers: any) {
    listUsers.forEach((value:any) => {
      const user: UserType = new UserType();
      user._id = value._id;
      user.login = value.login;
      user.url = value.url;
      user.avatar_url = value.avatar_url;
      this.users.push(user);
    });
    this.users= this.users.reverse();
  }

  /**
   * Get selected user
   * @param user 
   */
  getUser(user:UserType){
    this.userselected = user;
  }

 /**
  * Call the delete method of the user service
  * @param user 
  */
  deleteUser(user:UserType): void {
    this.userService.deleteUser(user._id!)
      .subscribe(
        (res:any) => {
          alert(res.message);
          this.users=[];
          this.loadUsers();
        }
      ),(err: any) => alert(err)
  }

  /**
   * Call the update method of the user service
   */
  updateUser() {
    const userDto: User={};
    userDto._id = this.userselected._id;
    userDto.login = this.userselected.login;
    userDto.url = this.userselected.url;
    userDto.avatar_url = this.userselected.avatar_url;
    this.userService.updateUser(this.userselected._id!, userDto)
      .subscribe(
        (res:any) => alert(res.message)
      ),(err:any) => alert(err);
  }
  
}
