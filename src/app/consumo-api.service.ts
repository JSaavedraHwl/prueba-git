import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {
  http = inject(HttpClient);
  constructor() { }

  getApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
