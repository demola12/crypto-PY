import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private apiUrl = 'http://77.68.92.98:8000/api/v1/authentication';
  private apiUrlA = 'http://77.68.92.98:8000/api/v1/setup/create_new_wallet';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private url: HttpClient) { 
    let token=localStorage.getItem('token')
    this.currentUserSubject = new BehaviorSubject<any>(token);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // register 
  register(firstname: string, lastname: string, email: string, password: string) {
    let formData = new URLSearchParams();
        formData.set('firstname', firstname);
        formData.set('lastname', lastname);
        formData.set('email', email);
        formData.set('password', password);
   
    return this.url.post<any>(`${this.apiUrl}/signup`, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: "08181232104"
    })
        .pipe(map(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            if(user.status){
                localStorage.setItem('token', user.token);

            }
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  // login
  login(email: string, password: string) {
    let formData = new URLSearchParams();
        formData.set('username', email);
        formData.set('password', password);

        return this.url.post<any>(`${this.apiUrl}/signin`, {
          
          user_id: email,
          password: password
        })
    
        .pipe(map(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            if(user?.token){
                localStorage.setItem('token', user.token);

            }
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  // wallet 
  wallet():Observable<any>{

    return this.url.post(this.apiUrlA, {

    })
  }

  ok(body?:any) {
    return of(new HttpResponse({ status: 200, body }))
  }

  error(message) {
    return throwError({ error: { message } });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}