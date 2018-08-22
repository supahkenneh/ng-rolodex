import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  url: string = "http://localhost:4300/api/"

  constructor(private http: HttpClient) { }


  getContacts(user) {
    const getUrl = this.url + `contacts?user=${user}`;
    console.log(getUrl);
    return this.http.get(getUrl).toPromise()
  }

  submit(data) {
    console.log('data', data);
    const postUrl = this.url + 'contacts';
    return this.http.post(postUrl, data).toPromise()
  }
}