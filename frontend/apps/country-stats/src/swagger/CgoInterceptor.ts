import {Inject, Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class CgoInterceptor implements HttpInterceptor {

  intercept(@Inject(HttpRequest) req: HttpRequest<any>, @Inject(HttpHandler) next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    const authReq = req.clone({ headers: req.headers.set('Allow-Control-Allow-Origin', '*') });
    return next.handle(authReq);
  }
}
