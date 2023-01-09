import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';


@Component({
  selector: 'app-posterior',
  templateUrl: './posterior.page.html',
  styleUrls: ['./posterior.page.scss'],
})
export class PosteriorPage  {

  titulo = 'Informações Posterior';

  listaPosterior: IMusculos[] = [
    {
      nome: 'LEVANTAMENTO TERRA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
         // eslint-disable-next-line max-len
      descricao: 'O levantamento terra é um dos exercícios compostos mais eficazes. É expresso como um exercício de força básico em esportes de força, como o levantamento de peso. É o movimento mais popular do treinamento de força, pois trabalha muitos grupos musculares.',
       pagina: ''
    },
    {
      nome: 'MESA FELXORA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif',
         // eslint-disable-next-line max-len
      descricao:'É um tipo de exercício de isolamento que se concentra nos músculos isquiotibiais. Você pode incluí-lo em seus programas de treinamento para desenvolver, fortalecer e apertar os músculos das pernas.',
      pagina: ''
    },
    {
      nome: 'FLEXORA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif',
         // eslint-disable-next-line max-len
      descricao:'Envolve dobrar os joelhos e mover os calcanhares em direção ao bumbum enquanto o resto do corpo permanece parado. É um tipo de exercício de isolamento que se concentra nos músculos isquiotibiais. Você pode incluí-lo em seus programas de treinamento para desenvolver, fortalecer e apertar os músculos das pernas.',
      pagina: ''

    },
      {
      nome: 'TERRA ROMENO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif',
         // eslint-disable-next-line max-len
      descricao:'O levantamento terra romeno tem como alvo muitos dos mesmos músculos que um levantamento terra convencional desenvolve, mas enfatiza mais as costas, isquiotibiais e músculos do quadril. É o movimento mais popular do treinamento de força e força, pois trabalha muitos grupos musculares.',
      pagina: ''

    },
    {
      nome: 'STIFF COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif',
         // eslint-disable-next-line max-len
      descricao:'O stiff tem como alvo muitos dos mesmos músculos que um levantamento terra convencional desenvolve, mas enfatiza mais os músculos das costas, isquiotibiais e quadril. É o movimento mais popular do treinamento de força e força, pois trabalha muitos grupos musculares.',
      pagina: ''

    },
    {
      nome: 'FLEXAO DE PERNA COM HALTER',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Lying-Dumbbell-Leg-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'',
      pagina: ''
    },
    {
      nome: 'BOM DIA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Good-Morning.gif',
      // eslint-disable-next-line max-len
      descricao:'Um bom exercício matinal é um movimento de dobradiça do quadril que ajuda a fortalecer seu bumbum e pernas, visando suas costas, isquiotibiais, glúteos e adutores. Quando bem feito, um bom treino matinal é eficaz para fortalecer as costas e torná-las mais flexíveis. No entanto, se você acabou de começar, é recomendável tentar o movimento com peso vazio.',
      pagina: ''
    },
    {
      nome: 'UNILATERAL MESA FLEXORA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Single-Leg-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'',
      pagina: ''
    },
    {
      nome: 'HORIZONTAL LEG PRESS',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-Horizontal-Leg-Press.gif',
      // eslint-disable-next-line max-len
      descricao:'',
      pagina: ''
    },
    {
      nome: 'LEVANTAMENTO TERRA COM KETTLEBELL',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/kettlebell-deadlift.gif',
      // eslint-disable-next-line max-len
      descricao:'',
      pagina: ''
    }


  ];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirMusculos(posterior: IMusculos) {
    this.dadosService.guardarDados('posterior', posterior);
    this.route.navigateByUrl('/dados-posterior');
  }
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja favoritar este exercicio?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Exercicio adicionado com Sucesso',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }




}
