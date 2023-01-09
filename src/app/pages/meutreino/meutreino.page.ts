import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-meutreino',
  templateUrl: './meutreino.page.html',
  styleUrls: ['./meutreino.page.scss'],
})
export class MeutreinoPage {

  titulo = 'Exercicios';

  listaMusculos: IMusculos[] = [

    {
      nome: 'Cardio',
      imagem: 'https://blogeducacaofisica.com.br/wp-content/uploads/2017/11/treino-cardio.jpg',
      descricao:'O treino cardio (cardiorrespiratório) é uma modalidade de exercícios que têm como objetivo fortalecer o sistema cardíaco, os pulmões e os músculos através de atividades físicas que testam sua resistência e movimentam o corpo inteiro',
      pagina: '/cardio'

    },

    {
      nome: 'Peito',
      // eslint-disable-next-line max-len
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71134IGROWn0JLpVeBuK0s6glA5LCmh5DZwZ2vLQojpAFqeYXG5ptPcRZJaEVMMyUUJk&usqp=CAU',
      descricao:'O treino de bíceps pode ser feito de 1 a 2 vezes por semana, em 3 séries de 10 a 12 repetições, dependendo do exercício.',
      pagina: '/peito'

    },
    {
      nome: 'Costas',
      imagem: 'https://elitedamusculacao.com/wp-content/uploads/2019/02/treino-de-costas.jpg',
      descricao:'O treino de costas pode ser feito de 2 a 3 vezes por semana, em 3 séries de 10 a 12 repetições, dependendo do exercício.',
      pagina: '/costa'

    },
    {
      nome: 'Ombros',
      imagem: 'https://img.freepik.com/fotos-premium/exercicio-de-ombro-com-barra-na-academia_600776-28213.jpg',
      descricao:'O treino de bíceps pode ser feito 2 vezes por semana, em 3 séries de 8 a 12 repetições, dependendo do exercício.',
      pagina: '/ombro'

    },
    {
      nome: 'Triceps',
      // eslint-disable-next-line max-len
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReF1Twz2Bmk-PsGi-mLYKBVc_X_e6eNYm1fg&usqp=CAU',
      descricao: 'O treino de tríceps de pode ser feito de 2 a 3 vezes por semana, de 10 a 12 repetições, dependendo do exercício',
      pagina: '/triceps'
    },
    {
      nome: 'Biceps',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsf2Cf4whThyXossAEyqF2zedqqBHdEL9tw&usqp=CAU',
      descricao:'O treino de bíceps pode ser feito de 1 a 3 vezes por semana, em 3 séries de 8 a 12 repetições, dependendo do exercício.',
      pagina: '/biceps'
    },
    {
      nome: 'Quadriceps',
      // eslint-disable-next-line max-len
      imagem: 'https://www.dicasdetreino.com.br/wp-content/uploads/2018/09/Agachamento-%E2%80%93-Execu%C3%A7%C3%A3o-Varia%C3%A7%C3%B5es-Erros-e-Dicas.jpg',
      descricao:'O treino de quadriceps pode ser feito 2 vezes por semana, em 2 séries de 12 a 14 repetições, dependendo do exercício.',
      pagina: '/quadriceps'

    },
    {
      nome: 'Posterior',
      // eslint-disable-next-line max-len
      imagem: 'https://gustavomartinspersonal.com.br/wp-content/uploads/2018/03/Super-treino-para-Pernas-parte-Anterior-e-Posterior-Panturrilhas.jpg',
      descricao:'O treino de posterior pode ser feito 2 vezes por semana, em 3 séries de 8 a 12 repetições, dependendo do exercício.',
      pagina: '/posterior'
    }


  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }



}
