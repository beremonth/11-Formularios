// Nombre archivo: app.module.ts
// Proposito: Modulo central, administrar y extender funcionalidad del sistema
// Autor: Stephen Arzeta
// Fecha: 09/01/2020
// Hora: 8:05 a.m.

// Ultima modificación: 09/01/2020 08:05 am
// Descripción: Inyectar archivo con validadores personalizados y re acomodar
// modulos relacionados con formulario reactivos

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

import { FormsModule } from '@angular/forms'; // Manejador de plantilla de formulario, en el html
import { ReactiveFormsModule } from '@angular/forms'; // Manejador de formulario reactivo
import { MiValidadorPersonalizado } from './components/validators/miValidadorPersonalizado.validators';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MiValidadorPersonalizado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
