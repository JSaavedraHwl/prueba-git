import { Component, inject, OnInit } from '@angular/core';
import { ConsumoApiService, Root } from '../consumo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  consumoApiService = inject(ConsumoApiService);

  datos: Root = [];
  constructor() {}

  ngOnInit(): void {
    this.consumoApiService.getApi().subscribe((data) => {
      console.log(data);
      this.datos = data;
    });
  }

}
