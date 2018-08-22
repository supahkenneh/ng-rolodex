import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewContactComponent implements OnInit {
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

  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

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
    console.log('name' ,this.nameErrors)
    return this.nameErrors.join(', ');
  };

  getEmailErrors() {
    console.log('email',this.emailErrors)
    return this.emailErrors.join(', ');
  }

  submitDisabled() {
    return !(this.nameValid && this.emailValid);
  };

  submitForm() {
    this.backend.submit(this.formData)
      .then(response => {
        console.log('new contact', response);
      })
  }
}