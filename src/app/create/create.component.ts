import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../shared/types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'login',
      type: 'input',
      props: {
        label: 'User name',
        placeholder: 'UserName',
        required: true,
      }
    },
    {
      key: 'avatar',
      type: 'input',
      props: {
        label: 'Url image avatar',
        placeholder: 'http://image...',
        required: true,
      }
    },
    {
      key: 'url',
      type: 'input',
      props: {
        label: 'Url Profile',
        placeholder: 'http://profile',
        required: true,
      }
    }
  ];

  constructor(private userService:UserService, private router: Router, private activatedRoute: ActivatedRoute){}
 
  /**
   * Method save data of users
   * @param model 
   */
  onSubmit(model:any) {
    const user:CreateUserDto= new CreateUserDto();
    user.login=model.login; 
    user.avatar_url=model.avatar; 
    user.url=model.url; 
    this.userService.saveUser(user)
      .subscribe(
        (res:any) => {
          alert(res.message);
          this.router.navigate(['/home']);
        }
      ), (err:any) => alert(err)
  }
}
