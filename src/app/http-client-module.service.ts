import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientModuleService {
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any> {
    return this.http.get('../assets/transactions.json');
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get(`../assets/${id}.json`);
  }
}
