import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './contactprofile.component.html',
  styleUrls: ['./contactprofile.component.scss']
})
export class ContactProfileComponent implements OnInit {
  user: object;
  contact: object;
  contactId: string;
  editing: boolean = false;
  isLoggedIn: boolean;

  editFormData: {
    name: string;
    address: string;
    mobile: string;
    work: string;
    home: string;
    email: string;
    twitter: string;
    instagram: string;
    github: string;
    created_by: string;
  } = {
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    twitter: '',
    instagram: '',
    github: '',
    created_by: '',
  }

  constructor(
    private session: SessionService,
    private backend: BackendService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.user = this.session.getSession();
    this.isLoggedIn = this.session.isLoggedIn();
  }

  ngOnInit() {
    this.contactId = this.activatedRoute.snapshot.paramMap.get('id');
    return this.backend.getOneContact(this.contactId)
    .then(contact => {
      return this.contact = contact[0];
    })
  }

  toggleEdit() {
    if (this.editing) {
      return this.editing = false;
    } else {
      return this.editing = true;
    }
  }

  submitContactEdit() {
    this.editFormData.created_by = this.session.user.username
    return this.backend.submitContactEdit(this.editFormData, this.contactId)
    .then(editedContact => {
      this.contact = editedContact;
      this.toggleEdit();
    })
  }
}