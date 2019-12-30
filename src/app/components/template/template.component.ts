import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // formulario de angular

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form)
    {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent  {
  usuario: object =
  {
      nombre: '',
      apellido: '',
      correo: '',
      pais: '',
      sexo: '',
      acepta: false
  } // end object usuario

  arregloPais = [
    {
    codigo: 'CRI',
    nombre: 'Costa Rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    },
    {
      codigo: 'MX',
      nombre: 'México'
    }
  ];

  sexos: string[] = ["Hombre", "Mujer", "Doble"];

  constructor() { }

  enviarDatos( formulario: NgForm )
  {
    console.log("Propiedades ngForm", formulario);
    console.log("Valor formulario", formulario.value);

    console.log("Valores usuario", this.usuario);
  } // end guardarDatos
}
