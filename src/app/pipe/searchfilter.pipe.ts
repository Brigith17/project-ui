import { Pipe, PipeTransform } from '@angular/core';
import { UserType } from '../shared/types';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(users: UserType[], searchValue: string): UserType[] {
    if(!users || !searchValue){
      return users;
    }
    return users.filter(user => user.login?.toLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
