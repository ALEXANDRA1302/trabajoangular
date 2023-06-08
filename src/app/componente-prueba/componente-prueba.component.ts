import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-prueba',
  templateUrl: './componente-prueba.component.html',
  styleUrls: ['./componente-prueba.component.css']
})
export class ComponentePruebaComponent {
 
  nombre = '';
  apellido = '';
  telefono = 0;

  submitForm() {
    console.log(`Nombre: ${this.nombre}\n Apellido: ${this.apellido}\nTelefono: ${this.telefono}`);
  }

}
