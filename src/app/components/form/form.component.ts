import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../utils/utils.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  miFormulario: FormGroup;
  mostrarErrores:Boolean= false;
  constructor(private fb: FormBuilder, private util:UtilsService) {
    this.miFormulario = this.fb.group({
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required]], 
      rfc: ['',[Validators.required,util.rfcMexico()]],
      telefono: ['',[Validators.minLength(10), Validators.maxLength(10)]],
      zip: ['',[Validators.required,util.codigoPostal()]],
      address:["",[Validators.required]]
    });
  }
  enviarFormulario() {
    this.mostrarErrores = true
   console.log(this.miFormulario)
    if (this.miFormulario.valid) {
     
      console.log('Formulario válido, enviando datos...');
      alert("formulario bien formado :)")
    } else {
      console.log("ERROR EN EL FORMULARIO")
      
    }
      }
    }

