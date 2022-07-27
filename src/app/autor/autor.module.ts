import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorComponent } from './autor.component';
import { LibroComponent } from '../libro/libro.component';



@NgModule({
  declarations: [
    AutorComponent,
    LibroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutorModule { }
