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

  constructor(
    private backend: BackendService,
    private session: SessionService
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


}