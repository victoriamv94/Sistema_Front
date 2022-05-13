import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClaseComponent } from '../crear-clase/crear-clase.component';
import { CrearMaestroComponent } from '../../maestro/crear-maestro/crear-maestro.component';

const routes: Routes = [
  { path: 'crearClase', component: CrearClaseComponent },
  { path: 'crearMaestro', component: CrearMaestroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexClaseRoutingModule { }
