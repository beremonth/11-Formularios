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
      pais: ''
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
  constructor() { }

  enviarDatos( formulario: NgForm )
  {
    console.log("ngForm", formulario);
    console.log("Valor", formulario.value);

    console.log("Usuario", this.usuario);
  } // end guardarDatos
}
