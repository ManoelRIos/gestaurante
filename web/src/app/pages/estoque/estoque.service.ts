import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../../models/Produto';

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {

  baseUrl = `${environment.baseUrl}/api/produto`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Produto[]>  {
    return this.http.get<Produto[]>(`${this.baseUrl}`);
  }
  
  getById(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }

  post(produto: Produto){
    return this.http.post(`${this.baseUrl}`, produto);
  }

  put(id: number ,produto: Produto){
    return this.http.put(`${this.baseUrl}/${id}`, produto);
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
