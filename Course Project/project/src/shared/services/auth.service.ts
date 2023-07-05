import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";
import {User} from "../models/user.model";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWdz4AkgO66o6GYNZZXF1RYc3CzVt6S1k',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, parseInt(resData.expiresIn));
        }));
  }

  logIn(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWdz4AkgO66o6GYNZZXF1RYc3CzVt6S1k',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, parseInt(resData.expiresIn));
        }));
  }

  private handleAuthentication(email: string, id: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!error.error || !error.error.error)
      return throwError(errorMessage);
    switch (error.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email not found!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password!';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user is disabled!';
        break;
    }
    return throwError(errorMessage);
  }
}
