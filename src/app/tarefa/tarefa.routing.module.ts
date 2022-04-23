import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar";
import { CadastrarTarefaComponent } from "./cadastrar";
import { EditarTarefaComponent } from "./editar";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefa',
    redirectTo: 'tarefa/listar'
  },
  {
    path: 'tarefa/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefa/cadastrar',
    component: CadastrarTarefaComponent
  },
  {
    path: 'tarefa/editar:id',             //Diferença das outras que esta passa paramentro id (pode ser qualquer nome)
    component: EditarTarefaComponent
  }
]
