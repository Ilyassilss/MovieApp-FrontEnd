import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ActorserviceService {

  constructor(private http: HttpClient) { }


  addActor(actor: any): Observable<any[]> {
    return this.http.post<any[]>(`${baseUrl}/actor`, actor)
  }

  getActors(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/actor`)
  }

  getActor(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/actor/${id}`);
  }

  updateActor(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/actor/${id}`, data);
  }

  deleteActor(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/actor/${id}`, { responseType: 'text' });
  }
}
