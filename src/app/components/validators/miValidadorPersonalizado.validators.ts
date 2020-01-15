/*

Nombre archivo: miValidadorPersonalizado.validator.ts
Proposito: Validadores para mi miPrimerGrupoFormulario
Autor: Stephen Arzeta
Fecha: 08/01/2020
Hora: 08:08 a.m.

Ultima modificación: 09/01/2020 07:49 am
Descripción: Refactorización: mejora redacción de código

*/
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'; // Clase principal de controles de formulario
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

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

} // end class MiValidadorPersonalizado