import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private session: SessionService,
    private router: Router
  ) {
    this.isLoggedIn = this.session.isLoggedIn();
  }

  ngOnInit() { 
    if (this.isLoggedIn) {
      this.router.navigate(['/profile'])
    }
   }


}