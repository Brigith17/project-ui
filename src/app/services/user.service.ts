import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from '../interfaces/User';
import { UserType } from '../shared/types';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  /**
   * This method get users of data base
   * 
   */
  getUsers() {
    return this.http.get(`http://localhost:3000/user`);
  }

   /**
   * This method get users of data base
   * 
   */
    deleteUser(id:string): Observable<User> {
      return this.http.delete<User>(`http://localhost:3000/user/delete?userID=${id}`);
    }
  
  /**
   * This method save users in data base
   */
  saveUser(user: UserType): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/user/create`, user);
  }
 /**
   * This method update users in data base
   */
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/user/update?userID=${id}`, user);
  }
}
