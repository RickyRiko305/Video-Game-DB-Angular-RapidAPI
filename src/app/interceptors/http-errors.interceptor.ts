import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, throwError as observableThrowError } from 'rxjs';
  import { catchError } from 'rxjs/operators';


@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        console.log("Error1");
        console.log(err);
        console.log("Error2");
        return observableThrowError(err);
      })
    );
  }
}