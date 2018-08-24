import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  url: string = "http://localhost:4200/api/"

  constructor(private http: HttpClient) { }


  getContacts(user) {
    const getUrl = this.url + `contacts?user=${user}`;
    return this.http.get(getUrl).toPromise()
  }

  submit(data) {
    console.log('data', data);
    const postUrl = this.url + 'contacts';
    return this.http.post(postUrl, data).toPromise()
  }

  register(data) {
    console.log('backend data :', data);
    const registerUrl = this.url + 'register';
    return this.http.post(registerUrl, data).toPromise();
  }

  login(data) {
    const loginUrl = this.url + 'login';
    return this.http.post(loginUrl, data).toPromise();
  }

  logout() {
    const logoutUrl = this.url + 'logout';
    console.log('logoutUrl :', logoutUrl);
    return this.http.get(logoutUrl).toPromise();
  }

  getProfile() {
    const profileUrl = this.url + 'profile';
    return this.http.get(profileUrl).toPromise();
  }

  editProfile(data){
    const editUrl = this.url + 'users';
    return this.http.put(editUrl, data).toPromise();
  }
}