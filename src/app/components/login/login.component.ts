import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginFormData: {
    username: string,
    password: string,
  } = {
      username: '',
      password: ''
    }

  submitValid: boolean = true;
  isLoggedIn: boolean;
  errors: boolean = false;
  loginError: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private session: SessionService
  ) { this.isLoggedIn = this.session.isLoggedIn() }

  submitDisabled() {
    if (this.loginFormData.username.length > 1 && this.loginFormData.password.length > 3) {
      return this.submitValid = false;
    } else {
      return this.submitValid = true;
    }
  }

  login() {
    return this.auth.login(this.loginFormData)
      .then((response) => {
        if (response) {
          this.errors = true;
          return this.loginError = response;
        } else {
          return this.router.navigate(['/contacts'])
        }
      })
  }
}