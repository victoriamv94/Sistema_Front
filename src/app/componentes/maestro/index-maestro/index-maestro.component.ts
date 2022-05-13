import { Component, OnInit } from '@angular/core';
import { MaestroItem } from '../../../modulos/maestroItem';


@Component({
  selector: 'app-index-maestro',
  templateUrl: './index-maestro.component.html',
  styleUrls: ['./index-maestro.component.css']
})
export class IndexMaestroComponent implements OnInit {

  maestroItems: MaestroItem[] =[];

  constructor() { }

  ngOnInit(): void {
    this.maestroItems = [
      {
        id: 0,
        nombre: 'juan',
        apellidos: 'GomezPerez',
        edad: 30,
        telefono: 4567890345,
        correo: 'juan@gmail'
      },
      {
        id: 1,
        nombre: 'Jorge',
        apellidos: 'AliasRomero',
        edad: 31,
        telefono: 9876543328,
        correo: 'jorge@gmail'
      }
    ];
    
  }

}
