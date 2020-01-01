import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
  miPrimerFormulario: FormGroup; // declaracion de variable de tipo FormGroup

  constructor()
  {
    // creacion de instancia de clase FormGroup
    // parametros FormControl('valorCampo', 'validador', 'validadorAsincrono')
    this.miPrimerFormulario = new FormGroup
    ({
      'nombre': new FormControl( '', [Validators.required, Validators.minLength(3) ]),
      'apellido': new FormControl( '', Validators.required ),
      'correo': new FormControl('',
        [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      ),
    });
  }// end constructor

  ngOnInit() {
  }

  guardarCambios()
  { 
    console.log("Datos en miPrimerFormulario");
    console.log(this.miPrimerFormulario.value);
    
    console.log("Propiedades del formulario: ");
    console.log(this.miPrimerFormulario);
  } // end guardarCambios

}
