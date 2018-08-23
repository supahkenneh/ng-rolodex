import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  user: string;
  contacts: any;

  constructor(
    private backend: BackendService,
    private route: ActivatedRoute
  ) {
    this.user = '';
    this.contacts = [];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.backend.getContacts(params.user)
      .then(result => {
        this.contacts = result;
      })
    })
  }


}