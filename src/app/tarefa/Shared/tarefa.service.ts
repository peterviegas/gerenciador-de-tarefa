import { Injectable } from '@angular/core';

import { Tarefa } from './tarefa.model';  //Implementado na aula criando os serviços de gerenciamento de tarefas
//import { Tarefa } from './';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class TarefaService {

  constructor() { }

  /**
   * Implementado na aula criando os serviços de gerenciamento de tarefas
   * Teremos 7 ações
   */

  //Listagem de tarefas, retorna todos os dados, seu retorno é um array de tarefas Tarefas[]
  //localStorage é um array que retorna os valores, deve ser passado uma chave, no caso é tarefa
  //o tipo utilizado para receber o valor do array é uma constante, devido ao seu valor não ser alterado
  //o operador ternário (if else em um linha) "?" foi colocado devido a primeira utilização pode retornar null ou indefine
  //o operador verifica se existe alguma tarefa, se sim executa o JSON, caso contrário, retorna um array vazio []
  //o localStorage armazena no formato string e a aplicação utiliza objeto, para converter em objeto é necessário o JSON.parse
  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Este método recebe o parametro tarefa e não retorna nada
   * @param tarefa
   * Para concatenar a tarefa, utilizo o método listarTodos para obter todas as tarefas
   * Para adicionar a tarefa, utilizaremos o getTime para trazer o time stape para a geração do ID
   * Push é utilizado para colocar a tarefa no final da fila
   * No local Storage, está sendo armazenado uma string que foi convertida pelo JSON
   */
  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Este método recebe um id numérico e retorna a Tarefa referente a este ID
   * @param id
   * Na linha que contém o find, ele está comparando os id's do storage e comparando com o id desejado
   * Quando ele encontra, a fução find recebe um true e retorna o conteúdo encontrado
   */
   /*buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);  //Não encontrei solução para este erro
  }*/
  buscarPorId(id: number): Tarefa | undefined{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(obj => obj.id === id);
  }

  /**
   * Método para atualizar informações dentro do objeto pesquisado
   * @param tarefa
   * Listamos todos para receber a lista de todas as tarefas
   * O forEach verifica três parâmetros: obj(que é a tarefa em si),
   * index (a posição que está sendo inteirada), objs (lista das tarefas(tarefas.forEach))
   * Faz verificação se id da tarefa é igual ao que estou interando e
   * atualiza o ojeto index co o valor da tarefa, o index é a posição, exemplo: 0, 1, 2, 3
   * Na linha do localStorage, é feita a atualização da lista de tarefas no storage
   * Obs: não estou retornando nada pelo fato de estar gravando no storage
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Neste método, recebo o id
   * @param id
   * O tipo da variável criada foi a let (tipo de acesso) devido a mesma ser modificada o valor na
   * linha logo abaixo da sua criação, é do tipo Tarefa[] (Array) para receber a lista
   * O utilitário filter, retorna a lista com a condição passada para ele
   * Na linha do localStorage, é feita a atualização da lista de tarefas no storage
   * Obs: na criação do tipo de acesso, começar na definição como const, depois let e no último caso var.
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Neste método recebemos o id para atualização do status
   * @param id
   * Utilizado no check box de concluído
   * Na linha de atualização do campo concluida foi colocado um ! para alterar o valor boleano
   * sempre invertendo o que era antes
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
