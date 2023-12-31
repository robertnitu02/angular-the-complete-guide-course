import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map, take, tap} from "rxjs/operators";

import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    Observable<boolean | UrlTree>
    | Promise<boolean
    | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.user
      .pipe(
        take(1),
        map((user) => {
          const isAuthenticated = !!user;
          if (isAuthenticated)
            return true;
          return this.router.createUrlTree(['/auth']);
        }));
    // tap((isAuth) => {
    //   return this.router.navigate(['/auth']); => createUrlTree now
    // }));
  }

}
