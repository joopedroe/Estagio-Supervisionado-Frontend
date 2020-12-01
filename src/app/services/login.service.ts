import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject: BehaviorSubject<User>;
  public userLogin: Observable<User>;

  constructor(private http: HttpClient,private router: Router, ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')||'{"user":null}'));
        this.userLogin = this.userSubject.asObservable();
   }
   public get userValue(): User {
    return this.userSubject.value;
}

  login(userInput:any, password:any) {
    const user = {
      userInput,
      password
    };
    return this.http.post(environment.API_URL.concat('usuario/'), user)
      .pipe(
        map(user => {
          localStorage.setItem('user', JSON.stringify(user));
          //this.userSubject.next(user);
          return user;
        })
      );
  }
  user() {
    const data = localStorage.getItem('user');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    //this.userSubject.next(null);
    this.router.navigate(['login/admin']);
}

}
