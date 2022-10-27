import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemCardapio } from '../../models/ItemCardapio';

@Injectable({
  providedIn: 'root',
})
export class ItemCardapioService {

  baseUrl = `${environment.baseUrl}/api/itenscardapio`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ItemCardapio[]>  {
    return this.http.get<ItemCardapio[]>(`${this.baseUrl}`);
  }
}
