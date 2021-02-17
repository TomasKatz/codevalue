import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import * as data from '../../assets/list.json';
@Injectable({
  providedIn: 'root'
})
export class RootInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request: ' + request.url);
    if (request.url === 'PRODUCTS_URL') {
      console.log('Loaded from JSON: ' + request.url);
      return of(new HttpResponse({ status: 200, body: ((data) as any).default }));
    }
    return next.handle(request);
  }
}
