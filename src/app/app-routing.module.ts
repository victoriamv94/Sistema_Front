import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMaestroComponent } from './componentes/maestro/crear-maestro/crear-maestro.component';
import { CrearClaseComponent } from './componentes/clase/crear-clase/crear-clase.component';
import { IndexMaestroComponent } from './componentes/maestro/index-maestro/index-maestro.component';
import { IndexClaseComponent } from './componentes/clase/index-clase/index-clase.component';
import { EditarMaestroComponent } from './componentes/maestro/editar-maestro/editar-maestro.component';
import { EditarClaseComponent } from './componentes/clase/editar-clase/editar-clase.component';

const routes: Routes = [
  { path: '', component: IndexMaestroComponent},
  { path: 'listaMaestros', component: IndexMaestroComponent},
  { path: 'listaClases', component: IndexClaseComponent },
  { path: 'crearClase', component: CrearClaseComponent },
  { path: 'crearMaestro', component: CrearMaestroComponent },
  { path: 'editarClase', component: EditarClaseComponent },
  { path: 'editarMaestro', component: EditarMaestroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
