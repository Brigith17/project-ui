import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public page: string = 'report'
  constructor(private router: Router) { }
  
  /**
   * The method that changes views in the page home
   * @param page 
   */
  changuePage(page:string){
    this.page=page;
  }

  /**
   * Method exit of application
   */
  close(){
    this.router.navigate(['/load']);
  }

}
