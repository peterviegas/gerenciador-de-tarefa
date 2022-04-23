import { Component, OnInit, ViewChild } from '@angular/core'; //Importou o ViewChild
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TarefaService, Tarefa } from '../Shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {


  //A view abaixo valida o formulário, ela permite ter uma referência do formulário HTML dentro do componente
  //formTarefa será definido no HTML, o segundo formTarefa vai injetar (igual ao constructor)
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  //@ViewChild('formTarefa', { static: true }) formTarefa: ElementRef;
  tarefa: Tarefa;            //Primeira coisa é ter uma tarefa para armazenamento local antes de salvar
                             //Teremos que ter o valor da View dentro do nosso componente

  constructor(
    private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();             //Incialização da variável tarefa. Necessário para ter uma associação
  }

  cadastrar(): void{
    if (this.formTarefa.form.valid){              //Vai retornar true or false, caso o formulário possua algum erro
      this.tarefaService.cadastrar(this.tarefa);  //Caso erro ele não faz nada, sem erro ele segue a execução
      this.router.navigate(["/tarefa"]);         //Para navegação de tela
    }
  }
}
