import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celular } from "../models/Celular";

const baseUrl = 'http://localhost:4000/celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  constructor(private http: HttpClient) { }

  create(data: Celular): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getAll(): Observable<Celular[]> {
    return this.http.get<Celular[]>(baseUrl);
  }

  delete(id:any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  updateCelular(data: Celular): Observable<any> {
    return this.http.put(baseUrl, data);
  }
  
}
