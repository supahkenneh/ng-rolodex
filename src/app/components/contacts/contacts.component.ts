import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  user: string;
  contacts: any;

  constructor(private backend: BackendService) {
    this.user = 'Kenny';
    this.contacts = [];
  }

  ngOnInit() {
    this.backend.getContacts()
      .then(result => {
        console.log(result);
        this.contacts = result;
      })
  }


}