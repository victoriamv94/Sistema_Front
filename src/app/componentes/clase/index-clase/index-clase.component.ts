import { Component, OnInit } from '@angular/core';
import { MaestroItem } from 'src/app/modulos/maestroItem';
import { ClaseItem } from '../../../modulos/claseItem';

@Component({
  selector: 'app-index-clase',
  templateUrl: './index-clase.component.html',
  styleUrls: ['./index-clase.component.css']
})
export class IndexClaseComponent implements OnInit {

  claseItems: ClaseItem[] =[];

  constructor() { }

  ngOnInit(): void {
    this.claseItems = [
      {
        id: 0,
        nombre: 'juan',
        salon: 'Salon1',
        maestro: 0
      },
      {
        id: 1,
        nombre: 'Jorge',
        salon: 'Salon2',
        maestro: 1
      }
    ];
  }

}
