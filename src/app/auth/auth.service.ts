import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    });

    return this.http.get(`${this.baseUrl}/api/users/me`, { headers, responseType: 'text' });
  }

  getMe(): Observable<string> {
    return this.http.get(`${this.baseUrl}/api/users/me`, { responseType: 'text' });
  }
}