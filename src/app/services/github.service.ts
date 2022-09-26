import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }
  /**
   * This method get data of github repository
   * @returns 
   */
  getUsersGithubRepository() {
    return this.http.get(`http://localhost:3000/github`);
  }

}
