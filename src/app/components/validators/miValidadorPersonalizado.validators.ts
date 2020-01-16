/*

Nombre archivo: miValidadorPersonalizado.validator.ts
Proposito: Validadores para mi miPrimerGrupoFormulario
Autor: Stephen Arzeta
Fecha: 08/01/2020
Hora: 08:08 a.m.

Ultima modificación: 15/01/2020 08:13 pm
// Descripción: Agregar le método errorUsuario para un usuario ocupado

*/
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'; // Clase principal de controles de formulario
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

export const contrasenaDiferente = (miPrimerGrupoFormulario: AbstractControl): {[respuesta: string]: boolean} =>
{
   const primeraContrasena = miPrimerGrupoFormulario.get('primeraContrasena').value;
   const segundaContrasena = miPrimerGrupoFormulario.get('segundaContrasena').value;

   if ( primeraContrasena !== segundaContrasena )
   {
      return { contrasenasDistintas: true };
      // input.get('segundaContrasena').setErrors({ errorContrasena: true });
   } // se activa error, en consola

   else if ( primeraContrasena === segundaContrasena )
   {
      return  null;
   } // no se activa error
} // end contrasenaDiferente

export class MiValidadorPersonalizado
{

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

   errorUsuario( nombreUsuario: FormControl ): Promise<any> | Observable<any>
   {
      console.log('Nombre usuario recibido: ');
      console.log(nombreUsuario.value);
      let respuesta = new Promise
      (
         (resolve, reject) =>
         {
            setTimeout(() =>
            {
               if (nombreUsuario.value === "strider")
               {
                  resolve({ usuarioOcupado: true })
               }
               else
               {
                  resolve(null)
               }
            }, 300);
         }
      )
      return respuesta;
   } // end usuarioOcupado

} // end class MiValidadorPersonalizado