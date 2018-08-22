import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  url: string = "http://localhost:4300/api/"

  constructor(private http: HttpClient) { }


  getContacts() {
    const contactUrl = this.url + 'contacts/users/isaac';
    return this.http.get(contactUrl).toPromise()
  }
}