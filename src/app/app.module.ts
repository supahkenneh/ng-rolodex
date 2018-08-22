import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modules
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//pages
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewContactComponent } from './components/newcontact/newcontact.component';
import { ProfileComponent } from './components/profile/profile.component';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

//services
import { BackendService } from './services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    NewContactComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'contacts', component: ContactsComponent },
        { path: 'addcontact', component: NewContactComponent },

      ]
    )
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
