import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarTarefaComponent } from './editar-tarefa.component';
import { NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    NgModel
  ]
})
export class EditarTarefaModule { }
