import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentePruebaComponent } from '../componente-prueba/componente-prueba.component';



@NgModule({
  declarations: [ComponentePruebaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ComponentePruebaComponent]
})
export class ModuloPruebaModule { }
