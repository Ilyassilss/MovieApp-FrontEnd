import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/movie`);
  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/category`);
  }

  getAllHome(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/movie/home`);
  }

  addMovie(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/movie/add`, data);
  }

  uploadImage(file: File, movie_id: number, is_cover: boolean): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('is_cover', (is_cover) ? '1' : '0');

    const req = new HttpRequest('POST', `${baseUrl}/movie/uploadFile/${movie_id}`, formData, {
      responseType: 'json'
    });
    return this.http.request(req);
  }
}