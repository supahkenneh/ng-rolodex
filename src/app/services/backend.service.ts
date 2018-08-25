import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  url: string = "http://localhost:4200/api/"

  constructor(private http: HttpClient) { }


  getContacts() {
    const getUrl = this.url + 'contacts';
    return this.http.get(getUrl).toPromise()
  }

  addContact(data) {
    const postUrl = this.url + 'contacts';
    return this.http.post(postUrl, data).toPromise()
  }

  register(data) {
    const registerUrl = this.url + 'register';
    return this.http.post(registerUrl, data).toPromise();
  }

  login(data) {
    const loginUrl = this.url + 'login';
    return this.http.post(loginUrl, data).toPromise();
  }

  logout() {
    const logoutUrl = this.url + 'logout';
    return this.http.get(logoutUrl).toPromise();
  }

  getProfile() {
    const profileUrl = this.url + 'profile';
    return this.http.get(profileUrl).toPromise();
  }

  editProfile(data) {
    const editUrl = this.url + 'users';
    return this.http.put(editUrl, data).toPromise();
  }

  deleteContact(id) {
    const deleteUrl = this.url + `contacts/${id}`
    return this.http.delete(deleteUrl).toPromise();
  }

  getOneContact(id) {
    const contactUrl = this.url + `contacts/${id}`
    return this.http.get(contactUrl).toPromise();
  }

  submitContactEdit(data, id) {
    const editContactUrl = this.url + `contacts/${id}`
    return this.http.put(editContactUrl, data).toPromise();
  }

  searchContacts(data) {
    const searchUrl = this.url + `contacts/search/${data}`
    return this.http.get(searchUrl).toPromise();
  }
}