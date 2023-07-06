import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient) { }

  registerAdmin(formData: any) {
    return this.http.post<any>(`${this.baseUrl}/admin-dashboard`, formData);
  }
  sendMesage(formData: any) {
    return this.http.post<any>(`${this.baseUrl}/home`, formData);
  }
}