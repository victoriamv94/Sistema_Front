import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexMaestroComponent } from './componentes/maestro/index-maestro/index-maestro.component';
import { CrearMaestroComponent } from './componentes/maestro/crear-maestro/crear-maestro.component';
import { EditarMaestroComponent } from './componentes/maestro/editar-maestro/editar-maestro.component';
import { IndexClaseComponent } from './componentes/clase/index-clase/index-clase.component';
import { CrearClaseComponent } from './componentes/clase/crear-clase/crear-clase.component';
import { EditarClaseComponent } from './componentes/clase/editar-clase/editar-clase.component';
import { HeaderComponent } from './componentes/header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IndexMaestroComponent,
    CrearMaestroComponent,
    EditarMaestroComponent,
    IndexClaseComponent,
    CrearClaseComponent,
    EditarClaseComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
