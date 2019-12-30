import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
  formulario: FormGroup; // declaracion de variable de tipo FormGroup
  constructor()
  {
    // creacion de instancia de clase FormGroup
    this.formulario = new FormGroup
    ({
      'nombre': new FormControl('Juan'),
      'apellido': new FormControl(''),
      'correo': new FormControl (''),
    });
  }// end constructor

  ngOnInit() {
  }

  guardarCambios()
  { 
    console.log("Propiedades del formulario: ");
    console.log(this.formulario);
    
    console.log("Datos en el formulario");
    console.log( this.formulario.value );
  } // end guardarCambios

}
