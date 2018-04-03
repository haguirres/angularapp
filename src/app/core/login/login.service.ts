import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { IUser } from './IUser';
import { apiUrls } from '../../shared/apiUrls';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LoginService {
  private _user: IUser;

  get user(): IUser {
    if (!this._user) {
      this.getToken();
    }
    return this._user;
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  isAuthenticated(): boolean {
    return this._user && sessionStorage.getItem('token') !== '';
  }

  getToken(): string {
    const token = sessionStorage.getItem('token');
    return token ? token : '';
  }

  login(user: IUser): void {
    this.getUserRequest(user).subscribe(userResult => {
      this._user = userResult;
      if (this._user && this._user.tokenUsuario) {
        this.storeToken(this._user);
        this.router.navigate(['disclaimer']);
      }
    });
  }

  logout() {
    sessionStorage.clear();
  }

  private storeToken(user: IUser): void {
    sessionStorage.setItem('token', user.tokenUsuario);
  }

  private getUserRequest(user: IUser): Observable<IUser> {
    if (this.checkUserLogged(user)) {
      return Observable.of(this._user);
    } else {
      return this.http.post<IUser>(apiUrls.urlLogin, user);
    }
  }

  private checkUserLogged(user: IUser): boolean {
    return (
      this._user &&
      this._user.tokenUsuario != null &&
      this._user.nombreUsuario.localeCompare(user.nombreUsuario) === 0 &&
      this._user.passwordUsuario.localeCompare(user.passwordUsuario) === 0
    );
  }
}
