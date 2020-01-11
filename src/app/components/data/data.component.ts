// Nombre archivo: data.component.ts
// Proposito: Logica por datos para controlar comportamiento miPrimerGrupoFormulario
// Autor: Stephen Arzeta
// Fecha: 09/01/2020
// Hora: 8:05 a.m.

// Ultima modificación: 11/01/2020 05:50 pm
// Descripción: Validar dos campos (contraseña) y valida que sean iguales

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { MiValidadorPersonalizado } from '../validators/miValidadorPersonalizado.validators';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit 
{

  miPrimerGrupoFormulario: FormGroup; // declaracion de variable de tipo FormGroup

  objetoFuenteDatos: object =
  {
    nombreCompleto:
    {
      nombre: 'Juan',
      apellido: 'Herrera'
    },
      correo: 'mary_sexy69_666@hotmail.com',
    // pasatiempo: ['dormir', 'comer', 'leer']
  };

  constructor(  )
  {
    // creacion de instancia de clase FormGroup
    
    this.miPrimerGrupoFormulario = new FormGroup
    ({
      
      'nombreCompleto': new FormGroup
      ({
        // parametros FormControl('valorCampo', 'validador: Sincrono', 'validador: Asincrono')
        'nombre': new FormControl( '', [Validators.required, Validators.minLength(3) ]),
        'apellido': new FormControl( '', [Validators.required, this.apellidoBloqueado] ),
      }),

      'correo': new FormControl
      ('',
        [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      ),
      'pasatiempo': new FormArray([
        new FormControl
        ('dormir',
          Validators.required
        )
      ]),
      'primeraContrasena': new FormControl
      ('',
        [Validators.required]
      ),
      'segundaContrasena': new FormControl
      ()
    });

    // enlaza del objetoJS con formulario FormGroup ( miPrimerGrupoFormulario )
    // this.miPrimerGrupoFormulario.setValue( this.objetoFuenteDatos );
    
    this.miPrimerGrupoFormulario.controls['segundaContrasena'].setValidators([
      Validators.required,
      this.contrasenaDiferente.bind( this.miPrimerGrupoFormulario )
    ])
  }// end constructor

  ngOnInit()
  {

    console.log('Contenido objetoJS');
    console.log( this.objetoFuenteDatos );
  }

  agregarPasatiempo()
  { 
    (<FormArray>this.miPrimerGrupoFormulario.controls['pasatiempo']).push
    (
      new FormControl
        ('',
          Validators.required
        )
    )
  } // end agregarPasatiempo

  apellidoBloqueado( input: FormControl ): { [respuesta: string]: boolean }
  {

     if ( input.value === "herrera")
     {
        return { errorApellido: true };
     } // se activa error, en consola

     else ( input.value !== "herrera" )
     {
        return  null;
     } // no se activa error

  } // end method bloquearApellido

  contrasenaDiferente( segundaContrasena: FormControl ): { [respuesta: string]: boolean }
  // contrasenaDiferente( primeraContrasena: FormControl ): any
  {
    let miPrimerGrupoFormulario: any = this;
    if( segundaContrasena.value !== miPrimerGrupoFormulario.controls['primeraContrasena'].value )
    {
      return { constrasenaDiferente: true };
    }
    else
    {
      return null;
    }
  } // end contrasenaDiferente

  guardarCambios()
  { 
    console.log("Datos en miPrimerGrupoFormulario");
    console.log(this.miPrimerGrupoFormulario.value);
    
    console.log("Propiedades del formulario: ");
    console.log(this.miPrimerGrupoFormulario);

    // this.miPrimerGrupoFormulario.reset({
    //   nombreCompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });
    
  } // end guardarCambios

 


} // end class DataComponent