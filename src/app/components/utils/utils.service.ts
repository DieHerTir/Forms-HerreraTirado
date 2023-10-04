import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
@Injectable({
  providedIn: 'root', // Esto asegura que el servicio sea una instancia única en toda la aplicación
})
export class UtilsService {
    numeroMaximoDiez(): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    
    // Verifica si el valor contiene exactamente 10 dígitos
    if (!/^[0-9]{10}$/.test(value)) {
      return { numeroExactamenteDiez: true };
    }
    
    return null;
  };

} 
rfcMexico(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    console.log('Valor recibido en rfcMexico():', value);

    // Expresión regular para validar la estructura básica de un RFC en México
    const rfcRegex =  /^([A-ZÑ&]{3,4})\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[A-Z\d]{2}[A\d]$/;

    if (!rfcRegex.test(value)) {
      return { rfcMexico: true };
    }

    return null;
  };
}
 codigoPostal(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    // Expresión regular para validar que sean 5 números
    const codigoPostalRegex = /^[0-9]{5}$/;

    if (!codigoPostalRegex.test(value)) {
      return { codigoPostal: true };
    }

    return null;
  };
}


}
