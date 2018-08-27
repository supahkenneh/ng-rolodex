import { Router } from '@angular/router';
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

  editFormData: {
    name: string;
    email: string;
    address: string;
  } = {
    name: '',
    email: '',
    address: ''
  }

  constructor(
    private session: SessionService,
    private backend: BackendService,
    private router: Router
  ) {
    this.user = this.session.getSession();
    this.loggedIn = this.session.isLoggedIn();
  }

  ngOnInit() {
    if (this.user) {
      this.backend.getProfile()
        .then(result => {
          console.log('result :', result);
          this.userProfile = result[0];
          this.editFormData = result[0];
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

  submitEdit() {
    return this.backend.editProfile(this.editFormData)
    .then((editedUser) => {
      this.userProfile = editedUser;
      this.toggleEdit();
    })
  }
}