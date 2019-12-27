import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // formulario de angular

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  usuario: object =
  {
      nombre: 'Joaquin',
      apellido: 'Guzman',
      correo: 'emoxito_chapito_666@hotmail.com'
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
