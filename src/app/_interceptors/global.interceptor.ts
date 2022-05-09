import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  private token:string;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Intercepted a request ",request)
    if (request.url.includes('authentication/signin')){
      console.log("Intercepting signin")
      const req = request.clone({
        
      });
      return next.handle(req);
    }
    else{
      this.token = window.localStorage.getItem('token')
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return next.handle(req);
    }
    
  }
}
