import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: object;
  userProfile: object;
  loggedIn: boolean = false;
  editing: boolean = false;

  constructor(
    private session: SessionService,
    private backend: BackendService
  ) {
    this.user = this.session.getSession();
    this.loggedIn = this.session.isLoggedIn();
  }

  ngOnInit() {
    if (this.user) {
      this.backend.getProfile()
        .then(result => {
          this.userProfile = result;
        })
    }
  }

  toggleEdit() {
    if (this.editing) {
      return this.editing = false;
    } else {
      return this.editing = true;
    }
  }
}