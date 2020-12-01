import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 

  constructor(  private login$:LoginService) { }

  ngOnInit(): void {
    
  }

  logout() {
    this.login$.logout();
  }
}
