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

  constructor(private auth: AuthService) { }

  register(){
    return this.auth.register(this.registerFormData)
    .then(() => {
      console.log('user registered');
    })
    .catch(err => console.log('error :', err))
  }

}
