import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CreateUserDto, UserType } from '../shared/types';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  users: Array<CreateUserDto>=[];

  constructor(private githubService:GithubService, private userService:UserService, private router: Router) { }

  ngOnInit(): void {}
  /**
   * This method gets data from GitHub service
   */
  loadDataBase(){
    this.githubService.getUsersGithubRepository().subscribe((res) => {
      this.getElements(res);
    }),
      (error: any) =>
        alert(error);
  }

   /**
   * Tthis method extract elements of list user github
   */
  getElements(listUsers: any) {
    listUsers.forEach((value:any) => {
      const user: CreateUserDto = new CreateUserDto();
      user.login = value.login;
      user.url = value.html_url;
      user.avatar_url = value.avatar_url;
      this.users.push(user);
    });
    this.saveDataUser(this.users);
  }
/**
 * This method change the data in the database
 * @param users 
 */
  saveDataUser(users:Array<CreateUserDto>){
    users.forEach((value:UserType) =>{
      this.userService.saveUser(value)
      .subscribe(
        res => {
          this.router.navigate(['/home']);
        }
      ), (err:any) => alert(err)
    });
    this.router.navigate(['/home']);
  }
}
