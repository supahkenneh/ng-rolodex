import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: object;

  constructor(
    private session: SessionService,
    private auth: AuthService,
    private router: Router
  ) { 
    this.user = this.session.getSession();
  }

  logout() {
    return this.auth.logout()
    .then(() => {
      return this.router.navigate(['/'])
    })
  }
}