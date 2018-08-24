import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modules
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//pages
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewContactComponent } from './components/newcontact/newcontact.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { ContactPageComponent } from './components/contactpage/contactpage.component';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

//services
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    NewContactComponent,
    ContactsComponent,
    RegisterComponent,
    LoginComponent,
    // ContactPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'contacts', component: ContactsComponent },
        { path: 'addcontact', component: NewContactComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
      ],
    )
  ],
  providers: [
    BackendService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }