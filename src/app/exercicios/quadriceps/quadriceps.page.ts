import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';
@Component({
  selector: 'app-quadriceps',
  templateUrl: './quadriceps.page.html',
  styleUrls: ['./quadriceps.page.scss'],
})
export class QuadricepsPage {

  titulo = 'Quadriceps';

  listaQuadriceps: IMusculos[] = [
    {
      nome: 'AGACHAMENTO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif',
         // eslint-disable-next-line max-len
      descricao: 'O agachamento é um exercício básico de fortalecimento usado em todos os esportes. O agachamento é um movimento dinâmico de treinamento de força que exige que os músculos da parte superior e inferior do corpo trabalhem juntos ao mesmo tempo.Enquanto o agachamento ajuda a desenvolver os músculos das pernas, também apoia a construção muscular em todo o corpo. Além disso, adicionar agachamentos aos seus treinos ajuda a fortalecer seus tendões, ligamentos e ossos.',
      pagina: ''
    },
    {
      nome: 'LEG PRESS',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif',
         // eslint-disable-next-line max-len
      descricao:'O leg press, é um tipo de exercício de treinamento de força. É um movimento eficaz para fortalecer os quadríceps, que estão na frente das coxas. Proporciona aumento de volume nas pernas . Se o seu objetivo é adicionar volume às pernas, o leg press é um dos melhores exercícios de perna que se concentram apenas nos músculos das pernas grandes. É adequado para iniciantes. Como este exercício é feito em uma máquina e ao fazer isso você não precisa se concentrar em seus músculos de equilíbrio, ele permite adicionar mais peso para ganhar mais músculos.',
      pagina: ''
    },
    {
      nome: 'EXTENSORA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
         // eslint-disable-next-line max-len
      descricao:'A extensão de perna, é um tipo de exercício de treinamento de força. É um movimento eficaz para fortalecer os quadríceps, que estão na frente das coxas. Como a extensão da perna é um movimento isolado, ela não trabalha os outros músculos, exceto os quadríceps.',
      pagina: ''

    },
      {
      nome: 'AGACHAMENTO SUMO COM BARRA ',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-sumo-squat.gif',
         // eslint-disable-next-line max-len
      descricao:'O agachamento sumo com barra é um exercício composto. É um dos exercícios mais populares para força e crescimento muscular. O agachamento sumô é particularmente eficaz para se concentrar nos músculos da parte interna das coxas. O agachamento sumo com barra é muito eficaz para firmar e fortalecer as pernas, atuando nos músculos glúteos, flexores do quadril, quadríceps, isquiotibiais e músculos internos da coxa. Além disso, agachamentos de sumô podem ajudar a moldar seus glúteos e bumbum.',
      pagina: ''

    },
    {
      nome: 'BULGARO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif',
         // eslint-disable-next-line max-len
      descricao:'É um exercício isolado. Constrói tamanho e força em quadríceps, glúteos e isquiotibiais. O agachamento búlgaro com halteres é um dos exercícios eficazes para a parte inferior do corpo que desenvolve completamente a força, a estabilidade e o equilíbrio das pernas.',
      pagina: ''

    },
    {
      nome: 'HACK MAQUINA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif',
      // eslint-disable-next-line max-len
      descricao:'O foco da máquina de agachamento hack são os músculos do quadríceps. É também um exercício de máquina projetado para treinar e fortalecer toda a parte inferior do corpo, incluindo os quadris, isquiotibiais, quadríceps e músculos do núcleo. Como sua aplicação é mais segura, os iniciantes podem preferir. A máquina de agachamento hack é útil porque a carga de peso é distribuída em um ângulo em relação ao seu centro de massa. Isso reduz o estresse na coluna e permite que mais peso seja levantado em geral. Você pode incluí-lo em seus programas de treinamento para aumentar a força funcional e melhorar os músculos estabilizadores das pernas.',
      pagina: ''
    },
    {
      nome: 'AFUNDO COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif',
      // eslint-disable-next-line max-len
      descricao:'Constrói tamanho e força em quadríceps, glúteos e isquiotibiais.  O afundo com halteres é um dos exercícios eficazes para a parte inferior do corpo que melhoram completamente a força, a estabilidade e o equilíbrio das pernas. O afundo com halteres tem como alvo os músculos do quadríceps e do quadril com mais intensidade, mas também atinge os tendões do joelho, coxas e núcleo.',
      pagina: ''
    },
    {
      nome: 'AGACHAMENTO SUMO PESO CORPORAL',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BODYWEIGHT-SUMO-SQUAT.gif',
      // eslint-disable-next-line max-len
      descricao:'O agachamento sumô é um tipo de exercício com peso corporal. É um dos exercícios mais populares para força e crescimento muscular. O agachamento sumô é particularmente eficaz para se concentrar nos músculos da parte interna das coxas.',
      pagina: ''
    },
    {
      nome: 'AFUNDO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Barbell-Lunge.gif',
      // eslint-disable-next-line max-len
      descricao:'Constrói tamanho e força em quadríceps, glúteos e isquiotibiais.  O afundo com halteres é um dos exercícios eficazes para a parte inferior do corpo que melhoram completamente a força, a estabilidade e o equilíbrio das pernas. O afundo com halteres tem como alvo os músculos do quadríceps e do quadril com mais intensidade, mas também atinge os tendões do joelho, coxas e núcleo.',
      pagina: ''
    },
    {
      nome: 'AGACHAMENTO PESO CORPORAL',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Bodyweight-Squat.gif',
      // eslint-disable-next-line max-len
      descricao:'O agachamento é um tipo de exercício com peso corporal. É um dos exercícios mais populares para força e crescimento muscular. O agachamento é particularmente eficaz para se concentrar nos músculos da perna e dos quadris.',
      pagina: ''
    }


  ];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirMusculos(quadriceps: IMusculos) {
    this.dadosService.guardarDados('triceps', quadriceps);
    this.route.navigateByUrl('/dados-quadriceps');
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
