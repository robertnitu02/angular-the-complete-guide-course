import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Request is on this way!');
    // console.log(`url: ${req.url}`);
    const modifiedRequest = req.clone({
      headers: req.headers.set('auth', 'true')
    });
    return next.handle(modifiedRequest);
  }
}
