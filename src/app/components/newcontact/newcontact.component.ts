import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewContactComponent {
  formData: {
    name: string,
    address: string,
    work: string,
    home: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string
  } = {
      name: '',
      address: '',
      work: '',
      home: '',
      email: '',
      twitter: '',
      instagram: '',
      github: ''
    };

  nameValid: boolean = false;
  emailValid: boolean = true;
  nameErrors: string[] = [];
  emailErrors: string[] = [];

  constructor(
    private backend: BackendService,
    private router: Router 
  ) { }

  validateName() {
    this.nameErrors.length = 0;
    if (!this.formData.name) {
      this.nameErrors.push('Name is required');
      this.nameValid = false;
    }
    else if (this.formData.name.length < 2) {
      this.nameErrors.push('Minimum 2 characters required')
      this.nameValid = false;
    }
    else { this.nameValid = true }
  }

  validateEmail() {
    this.emailErrors.length = 0;
    if (!this.formData.email.includes('@')) {
      this.emailErrors.push('Incorrect email format')
      this.emailValid = false;
    }
    else { this.emailValid = true }
  }

  getNameErrors() {
    return this.nameErrors.join(', ');
  };

  getEmailErrors() {
    return this.emailErrors.join(', ');
  }

  submitDisabled() {
    return !(this.nameValid && this.emailValid);
  };

  submitForm() {
    this.formData.name = this.formData.name.charAt(0).toUpperCase() + this.formData.name.substring(1);
    this.backend.addContact(this.formData)
      .then(response => {
        this.router.navigate(['/contacts'])
      })
  }
}