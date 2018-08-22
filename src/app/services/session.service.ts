import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  user: {
    loggedIn: boolean,
    username: string
  } = {
      loggedIn: false,
      username: ''
    };

  constructor() {
    let userString = window.localStorage.getItem('user');
    try {
      if (userString) { this.user = JSON.parse(userString); }
      else { console.log('user was not found'); }
    }
    catch (err) {
      console.log('could not parse user');
    }
  }
  
  getSession() {
    return this.user;
  }

  //save to memory
  //saving as an object
  setSession(username) {
    this.user.username = username;
    this.user.loggedIn = true;

    //save to localStorage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem('user', userString);
  }

  //'logging out' of user
  clearSession() {
    this.user.loggedIn = false;
    this.user.username = '';
    window.localStorage.removeItem('user');
  }

  //check that user is logged in
  isLoggedIn() {
    return this.user.loggedIn;
  }
}