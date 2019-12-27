import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // formulario de angular

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    input.ng-invalid.ng-touched
    {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {
  usuario: object =
  {
      nombre: '',
      apellido: '',
      correo: ''
  } // end object usuario

  constructor() { }

  ngOnInit() {
  }

  enviarDatos( formulario: NgForm )
  {
    console.log("ngForm", formulario);
    console.log("Valor", formulario.value);

    console.log("Usuario", this.usuario);
  } // end guardarDatos
}
