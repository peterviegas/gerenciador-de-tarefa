import { Component, OnInit } from '@angular/core';

import { Tarefa } from '../Shared';      //Deverá ser importado para ser utilizado
import { TarefaService } from '../Shared';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];        //Será utilizado para o armazenamento das tarefas

  constructor(private tarefaService: TarefaService) { }     //Necessário ter este construtor

  ngOnInit(): void {
    this.tarefas = this.listarTodos();              //Melhor lugar para associar a tarefa criada acima com a função listarTodos
  }

  listarTodos(): Tarefa[] {
  	return this.tarefaService.listarTodos();        //Retorna a lista de tarefas
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
