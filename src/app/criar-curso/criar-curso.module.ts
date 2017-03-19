import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent],
  // providers: [CursosService] //Se declarar aqui, sera usada uma unica instancia para toda a aplicação, caso se repita em outro modulo ainda sim sera uma unica instancia
})
export class CriarCursoModule { }
