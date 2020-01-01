import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
  miPrimerGrupoFormulario: FormGroup; // declaracion de variable de tipo FormGroup

  objetoFuenteDatos: object =
  {
    nombreCompleto:
    {
      nombre: 'Juan',
      apellido: 'Herrera'
    },
    correo: 'mary_sexy69_666@hotmail.com'
  };

  constructor()
  {
    // creacion de instancia de clase FormGroup
    // parametros FormControl('valorCampo', 'validador', 'validadorAsincrono')
    this.miPrimerGrupoFormulario = new FormGroup
    ({

      'nombreCompleto': new FormGroup
      ({
        'nombre': new FormControl( '', [Validators.required, Validators.minLength(3) ]),
        'apellido': new FormControl( '', Validators.required ),
      }),

      'correo': new FormControl
      ('',
        [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      ),
    });

    // enlaza del objetoJS con formulario FormGroup ( miPrimerGrupoFormulario )
    this.miPrimerGrupoFormulario.setValue( this.objetoFuenteDatos );

  }// end constructor

  ngOnInit()
  {

    console.log('Contenido objetoJS');
    console.log( this.objetoFuenteDatos );
  }

  guardarCambios()
  { 
    console.log("Datos en miPrimerGrupoFormulario");
    console.log(this.miPrimerGrupoFormulario.value);
    
    console.log("Propiedades del formulario: ");
    console.log(this.miPrimerGrupoFormulario);
  } // end guardarCambios

}
