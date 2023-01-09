import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-triceps',
  templateUrl: './triceps.page.html',
  styleUrls: ['./triceps.page.scss'],
})


export class TricepsPage {

  titulo = 'Triceps';

  listaTriceps: IMusculos[] = [
    {
      nome: 'KICKBACK COM HALTERES(COICE)',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Kickback.gif',
      // eslint-disable-next-line max-len
      descricao: 'Entre os exercícios que trabalham os músculos do braço, o kickback e suas variações são muito eficazes. Você pode facilmente aplicar esses exercícios com halteres, cabos, kettlebells ou faixas de resistência. O contragolpe de tríceps com haltere é um exercício de isolamento que aumenta a força e os músculos em todas as três cabeças que compõem o músculo tríceps.',
      pagina: ''
    },
    {
      nome: 'UM BRAÇO REVERSO PUSH-DOWN',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/One-Arm-Reverse-Push-Down.gif',
      // eslint-disable-next-line max-len
      descricao:'O pushdown reverso de um braço é um movimento de isolamento, de articulação única, que isola o tríceps sem a ajuda de outros grupos musculares ou articulações. A pegada por baixo da mão coloca mais estresse na cabeça medial do tríceps. Como ajuda a atingir especificamente uma das cabeças, é importante que você o incorpore à sua rotina, se não a todos os treinos, para um desenvolvimento equilibrado. Além disso, você pode usar esse movimento para corrigir problemas de simetria. (por exemplo, se um braço for maior que o outro)',
      pagina: ''
    },
    {
      nome: 'TRÍCEPS PUSH-DOWN',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif',
      // eslint-disable-next-line max-len
      descricao:'O exercício de tríceps é um dos exercícios de braço mais populares que você vê na academia. O push-down é um movimento de isolamento que se concentra nos músculos do tríceps. Você pode incluí-lo em seus programas de treinamento para aumentar a força e o crescimento do tríceps, e é ideal para iniciantes.',
      pagina: ''

    },
      {
      nome: 'PARARELA NO BANCO ',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif',
      // eslint-disable-next-line max-len
      descricao:'A paralela   no banco são um exercício composto, pois trabalharam vários grupos musculares simultaneamente. Embora este exercício de peso corporal atinja principalmente o tríceps, ele também atinge o peito e a frente do ombro.',
      pagina: '/triceps'

    },
    {
      nome: 'MERGULHO DE TRICPEPS',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif',
      // eslint-disable-next-line max-len
      descricao:'Os mergulhos de tríceps são um exercício composto, pois trabalharam vários grupos musculares simultaneamente. Embora este exercício de peso corporal atinja principalmente o tríceps, ele também atinge o peito e a frente do ombro.',
      pagina: '/triceps'

    },
    {
      nome: 'PARALELA MAQUINA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Overhand-Triceps-Dip.gif',
      // eslint-disable-next-line max-len
      descricao:'A paralela na maquina é um exercício composto de tríceps que aumenta a força do braço e desenvolve os músculos do braço. Embora o foco esteja nos músculos do tríceps, também trabalha os músculos do peito, ombros e costas.',
      pagina: '/triceps'
    },
    {
      nome: 'TRICEPS TESTA NO BANCO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Triceps-Extension.gif',
      // eslint-disable-next-line max-len
      descricao:'O principal benefício da extensão de tríceps com barra deitada é a hipertrofia do tríceps que vem com o movimento. A extensão de tríceps com barra deitada são exercícios de isolamento, o que significa que eles usam apenas uma articulação. Ao contrário de outros exercícios de tríceps, a extensão de tríceps deitado ativa todas as três cabeças do tríceps, o que significa que todo o seu tríceps ficará mais forte com este exercício. No entanto, as extensões de barra deitadas não pressionam os pulsos, por isso são uma alternativa para pessoas com tensão ou lesão no pulso.',
      pagina: '/triceps'
    },
    {
      nome: 'COICE MAQUINA POLIA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Tricep-Kickback.gif',
      // eslint-disable-next-line max-len
      descricao:'Entre os exercícios que trabalham os músculos do braço, o kickback e suas variações são muito eficazes. Você pode facilmente aplicar esses exercícios com halteres, cabos, kettlebells ou faixas de resistência.',
      pagina: '/triceps'
    },
    {
      nome: 'MERGULHOS DE TRÍCEPS NO CHÃO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-dips-on-floors.gif',
      // eslint-disable-next-line max-len
      descricao:'Os mergulhos de tríceps no chão são um exercício composto, pois trabalharam vários grupos musculares simultaneamente. Embora este exercício de peso corporal atinja principalmente o tríceps, ele também atinge o peito e a frente do ombro.',
      pagina: '/triceps'
    },
    {
      nome: 'DUMBBELL SENTADO NA FRENTE E ATRÁS TATE PRESS',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Dumbbell-Seated-Front-and-Back-Tate-Press.giff',
      // eslint-disable-next-line max-len
      descricao:'O exercício de tate press frontal e traseira é um exercício de tríceps bidirecional que visa efetivamente o tríceps e também trabalha a parte superior do tórax e as cabeças frontais dos ombros. Trabalhar o tríceps em diferentes ângulos beneficiará o desenvolvimento muscular e a força, mas devido ao ângulo e à posição dos cotovelos, será mais benéfico trabalhar o Tate Press com pesos leves a médios.',
      pagina: '/triceps'
    },
    {
      nome: 'EXTENSÃO DE TRÍCEPS COM CABO DE JOELHOS',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Kneeling-Cable-Extension.gif',
      // eslint-disable-next-line max-len
      descricao:'O treino de posterior pode ser feito 2 vezes por semana, em 3 séries de 8 a 12 repetições, dependendo do exercício.',
      pagina: '/triceps'
    }


  ];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirMusculos(triceps: IMusculos) {
    this.dadosService.guardarDados('triceps', triceps);
    this.route.navigateByUrl('/dados-triceps');
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
