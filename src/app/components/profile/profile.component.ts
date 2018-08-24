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
        console.log('result:', result);
        this.userProfile = result;
      })
    }
   }
}