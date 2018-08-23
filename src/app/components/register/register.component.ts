import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerFormData: {
    username: string,
    password: string,
    name: string,
    email: string,
    address: string
  } = {
      username: '',
      password: '',
      name: '',
      email: '',
      address: ''
    }

  usernameValid: boolean = false;
  emailValid: boolean = true;
  passwordValid: boolean = false;
  usernameErrors: string[] = [];
  emailErrors: string[] = [];
  passwordErrors: string[] = [];

  constructor(private auth: AuthService) { }

  validateUsername() {
    this.usernameErrors.length = 0;
    if (!this.registerFormData.username) {
      this.usernameErrors.push('Username is required');
      this.usernameValid = false;
    }
    else if (this.registerFormData.username.length < 2) {
      this.usernameErrors.push('Minimum 2 characters required');
      this.usernameValid = false;
    }
    else { this.usernameValid = true }
  }

  validateEmail() {
    this.emailErrors.length = 0;
    if (!this.registerFormData.email.includes('@')) {
      this.emailErrors.push('Incorrect email format')
      this.emailValid = false;
    }
    else { this.emailValid = true; }
  }

  validatePassword() {
    this.passwordErrors.length = 0;
    if (!this.registerFormData.password) {
      this.passwordErrors.push('Password is required');
      this.passwordValid = false;
    }
    else if (this.registerFormData.password.length < 4) {
      this.passwordErrors.push('Minimum length of 4 required');
      this.passwordValid = false;
    }
    else { this.passwordValid = true }
  }

  getUsernameErrors() {
    return this.usernameErrors.join(', ');
  }
  
  getEmailErrors() {
    return this.emailErrors.join(', ');
  }
  
  getPasswordErrors() {
    return this.passwordErrors.join(', ');
  }

  submitDisabled() {
    return !(this.usernameValid && this.emailValid && this.passwordValid);
  };

  register() {
    console.log(this.registerFormData)

    // return this.auth.register(this.registerFormData)
    // .then(() => {
    //   console.log('user registered');
    // })
    // .catch(err => console.log('error :', err))
  }

}
