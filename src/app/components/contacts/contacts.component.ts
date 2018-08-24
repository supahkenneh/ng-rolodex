import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: any;
  isLoggedIn: boolean;
  editing: boolean = false;

  constructor(
    private backend: BackendService,
    private session: SessionService,
    private router: Router
  ) {
    this.contacts = [];
    this.isLoggedIn = this.session.isLoggedIn();
  }

  ngOnInit() {
    this.backend.getContacts()
      .then(contacts => {
        this.contacts = contacts;
      })
  }

  goToEdit(event, name) {
    console.log('event :', event);
    console.log('name :', name);
  }

  deleteContact(id) {
    return this.backend.deleteContact(id)
      .then(() => {
        return this.contacts = this.contacts.filter(contact => {
          return contact.id !== id
        })
      })
  }
}