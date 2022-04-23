import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaRoutes } from './tarefa';

const routes: Routes = [
  {
    path:'',      //Se o path for vazio, ou só o path padrão ele vai iniciar no listar.
    redirectTo: '/tarefa/listar',
    pathMatch: 'full' //Informado para passar o path completo evitando ele se perder.
  },
  ...TarefaRoutes   //Operador que permite concatenar arrays, a aplicação será inicializada com todas as rotas
]; //Onde estarão as listas das rotas

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//forRoot responsável para garantir que a rota é única
