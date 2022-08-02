import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
import { Observable } from 'rxjs';

const baseUrl = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class DirectorserviceService {

  constructor(private http : HttpClient) { }


  addDirector(director: any): Observable<any[]> {
    return this.http.post<any[]>(`${baseUrl}/director`, director)
  }

  getDirectors(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/director`)
  }

  getDirector(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/director/${id}`);
  }

  updateDirector(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/director/${id}`, data);
  }

  deleteDirector(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/director/${id}`, { responseType: 'text' });
  }
}
