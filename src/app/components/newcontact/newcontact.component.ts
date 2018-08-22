import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

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
  numberValid: boolean = false;
  emailValid: boolean  =false;
  nameErrors: string[] = [];
  emailErrors: string[] = [];
  numberErrors: string[] = [];

  constructor(private backend: BackendService) { }

  validateName() {
    this.nameErrors.length = 0;
    if(!this.formData.name) {
      this.nameErrors.push('Name is required');
    }
    else if (this.formData.name.length < 2) {
      this.nameErrors.push('Minimum 2 characters required')
    }
    else { this.nameValid = true }
  }

}