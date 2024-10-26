import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Root = Root2[]

export interface Root2 {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {
  http = inject(HttpClient);
  constructor() { }

  getApi(){
    return this.http.get<Root>('https://jsonplaceholder.typicode.com/users');
  }
}

