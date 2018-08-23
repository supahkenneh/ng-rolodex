import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  usernameErrors: string[] = [];
  passwordErrors: string[] = [];
  submitValid: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  getUsernameErrors() {
    if (this.usernameErrors.length < 1) {
      this.submitValid = true;
    }
    return this.usernameErrors.join(', ');
  }

  getPasswordErrors() {
    if (this.passwordErrors.length < 1) {
      this.submitValid = true;
    }
    return this.passwordErrors.join(', ');
  }

  submitDisabled() {
    return !(this.submitValid);
  }  

  login() {
    return this.auth.login(this.loginFormData)
    .then(() => {
      this.router.navigate(['/contacts'])
    })
  }
}