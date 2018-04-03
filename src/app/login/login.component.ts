import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login/login.service';
import { IUser } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser;

  constructor(private loginService: LoginService) {
    this.user = this.userFactory();
  }

  ngOnInit() {}

  login(): IUser {
    this.loginService.login(this.user);
    return this.loginService.user;
  }

  logout() {
    this.user = this.userFactory();
    this.loginService.logout();
  }

  userFactory(): IUser {
    return this.user = {
      nombreUsuario: 'test',
      passwordUsuario: 'test',
      tokenUsuario: '',
      esUsuarioAnonimo: false,
      rol: 'test'
    };
  }
}
