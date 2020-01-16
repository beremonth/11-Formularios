// Nombre archivo: data.component.ts
// Proposito: Logica por datos para controlar comportamiento miPrimerGrupoFormulario
// Autor: Stephen Arzeta
// Fecha: 09/01/2020
// Hora: 8:05 a.m.

// Ultima modificación: 15/01/2020 08:09 pm
// Descripción: Agregar el campo validador asyncrono para usuario

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MiValidadorPersonalizado } from '../validators/miValidadorPersonalizado.validators';
import { contrasenaDiferente } from '../validators/miValidadorPersonalizado.validators';


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

  constructor( miFormBuilder: FormBuilder, miValidador: MiValidadorPersonalizado)
  {
    // creacion de instancia de clase FormGroup
    
    this.miPrimerGrupoFormulario = miFormBuilder.group
    ({
      
      'nombreCompleto': new FormGroup
      ({
        // parametros FormControl('valorCampo', 'validador: Sincrono', 'validador: Asincrono')
        'nombre': new FormControl( '', [Validators.required, Validators.minLength(3) ]),
        'apellido': new FormControl( '', [Validators.required, miValidador.apellidoBloqueado] ),
      }),

      'correo': new FormControl
      ('',
        [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      ),
      'nombreUsuario': new FormControl
      ('',
        Validators.required,
        miValidador.errorUsuario
      ),

      'contrasenas': miFormBuilder.group
      ({
        'primeraContrasena': new FormControl ( '', Validators.required ),
        'segundaContrasena': new FormControl ('', [Validators.required ])
      }, { validator: contrasenaDiferente }),
      
      'pasatiempo': new FormArray([
        new FormControl
        ('dormir',
          Validators.required
        )
      ])


      
      
    });

    // enlaza del objetoJS con formulario FormGroup ( miPrimerGrupoFormulario )
    // this.miPrimerGrupoFormulario.setValue( this.objetoFuenteDatos );

  }// end constructor

  ngOnInit()
  {  

    console.log('Contenido objetoJS');
    console.log( this.objetoFuenteDatos );
  }

  agregarPasatiempo()
  { 
    (<FormArray>this.miPrimerGrupoFormulario.controls['pasatiempo']).push(
      new FormControl
        ('',
          Validators.required
        )
    )
  } // end agregarPasatiempo

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



}
