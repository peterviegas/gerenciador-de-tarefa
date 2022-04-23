import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

import { Tarefa } from '../Shared';
import { TarefaService } from '../Shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService,
    private route: ActivatedRoute,          //Para obter parâmetro para carregar a nossa tela
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];       //operador + converte para numérico uma string
    this.tarefa = this.tarefaService.buscarPorId(id);   //Carregar a tarefa
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {                   //Certifica se o formulário é válido
	    this.tarefaService.atualizar(this.tarefa);
	    this.router.navigate(['/tarefa']);
    }
  }

}
