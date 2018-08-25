import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  contacts: any;
  isLoggedIn: boolean;
  
  searchTerm: string;
  searchError: boolean = false;
  searchMessage: string;

  constructor(
    private backend: BackendService,
    private session: SessionService,
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

  deleteContact(id) {
    return this.backend.deleteContact(id)
      .then(() => {
        return this.contacts = this.contacts.filter(contact => {
          return contact.id !== id
        })
      })
  }

  //if search box is empty, show all contacts
  deactivateSearch() {
    if (this.searchTerm.length < 1) {
      return this.backend.getContacts()
      .then(contacts => {
        this.contacts = contacts;
      })
    }
  }
  
  //hides message when reattempting search
  resetSearch() {
    return this.searchError = false;
  }
  
  //handles search error message if no result is found
  searchContacts() {
    return this.backend.searchContacts(this.searchTerm)
    .then(result => {
      if (Object.keys(result).length < 1) {
        this.searchMessage = 'No matching contacts!'
        return this.searchError = true;
      }
        return this.contacts = result;
    })
  }
}