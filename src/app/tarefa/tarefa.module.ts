import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';   //Importado para implementar as listagens
import { FormsModule } from '@angular/forms';     //Importado para implementar as listagens

import { TarefaService } from './Shared';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { TarefaConcluidaDirective } from './Shared';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,       //Importado para implementar as listagens, desta forma vamos poder utilizar as deritivas
    FormsModule         //Importado para implementar as listagens
  ],
  providers: [
    TarefaService,
    CadastrarTarefaComponent,
    EditarTarefaComponent
  ]
})
export class TarefaModule { }
