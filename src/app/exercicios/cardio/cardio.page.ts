import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {


  titulo = 'Cardio';

  listaCardio: IMusculos[] = [
    {
      nome: 'Bicicleta',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Riding-Outdoor-Bicycle.gif',
      // eslint-disable-next-line max-len
      descricao: 'é um dos exercícios mais populares usados ​​para fortalecer os músculos das costas. Pulldown V-Taper está entre os movimentos que permitem alcançar a imagem. Ele fornece interação nos grupos musculares redondo menor e redondo maior para o desenvolvimento dos músculos traseiros do ombro e da asa. Desta forma, você pode criar uma estrutura mais larga nas costas, asas e ombros',
      pagina: ''
    },
    {
      nome: 'Corda',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Jump-Rope.gif',
        // eslint-disable-next-line max-len
      descricao:'Quando se trata de exercícios compostos, um dos melhores exercícios que vem à mente é provavelmente o movimento de barra. A barra é um exercício de cadeia fechada que trabalha quase todos os grupos musculares da parte superior do corpo e proporciona hipertrofia e força no peso corporal.',
      pagina: ''
    },
    {
      nome: 'COMO FAZER: TORÇÕES DO COTOVELO AO JOELHO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Elbow-To-Knee-Twists.gif',
        // eslint-disable-next-line max-len
      descricao:'O Cable Rear Lat Pulldown é um dos exercícios mais populares usados ​​para fortalecer os músculos das costas. Pulldown V-Taper está entre os movimentos que permitem alcançar a imagem. Ele fornece interação nos grupos musculares levantador da escápula e redondo maior para o desenvolvimento dos músculos traseiros do ombro e da asa. Desta forma, você pode criar uma estrutura mais larga nas costas, asas e ombros.',
      pagina: ''
    },
      {
      nome: 'COMO FAZER MOUNTAIN CLIMBER',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-climber.gif',
        // eslint-disable-next-line max-len
      descricao:'Assuma uma posição normal de flexão com o peso nas mãos e dedos dos pés, costas e pernas retas e mãos afastadas na largura dos ombros.',
      pagina: ''
    },
    {
      nome: 'PALADAS DE ENERGIA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Power-Skips.gif',
        // eslint-disable-next-line max-len
      descricao:'É um dos exercícios mais eficazes quando se trata de músculos das costas. Permite que você construa a largura e a espessura das costas simultaneamente. Os movimentos do cabo fornecem tensão constante durante todo o movimento. O uso de cabos permite que você trabalhe as partes concêntricas e excêntricas do exercício. Mais tensão equivale a mais ativação muscular.',
      pagina: ''
    },
    {
      nome: 'COMO SALTAR PARA TRÁS',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Backward-Jumping.gif',
        // eslint-disable-next-line max-len
      descricao:'O salto para trás é um exercício pliométrico. Os exercícios pliométricos são movimentos aeróbicos explosivos que aumentam a velocidade, a rapidez e a força e trabalham todo o corpo.O salto para trás visa os músculos abdominais, músculos do quadril e flexores do quadril e também trabalha as coxas, tendões do joelho e quadríceps.',
      pagina: ''
    },    {
      nome: 'REMADA COM HALTERES UNILATERAL',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif',
        // eslint-disable-next-line max-len
      descricao:'A remada com halteres é um exercício eficaz para fortalecer e desenvolver a musculatura das costas. A remada com halteres de um braço é um exercício unilateral que aumenta a força e o tamanho do grande dorsal e melhora a função geral da articulação do ombro. Treinar um braço de cada vez é a melhor maneira de garantir o foco ideal no músculo alvo, aumentar o recrutamento de fibras e superar os desequilíbrios de força entre os lados do corpo.',
      pagina: ''
    },
    {
      nome: 'REMADA CURVADA COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif',
        // eslint-disable-next-line max-len
      descricao:'Pegue dois halteres e fique de pé com os pés afastados na largura dos ombros. Pegue os halteres com as palmas voltadas uma para a outra. Enquanto mantém as costas retas, dobre levemente os joelhos e incline-se para a frente, de modo que a coluna fique 45-90 graus em relação ao chão.',
      pagina: ''
    },
    {
      nome: 'REMADA CAVALINHO T',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lever-T-bar-Row.gif',
        // eslint-disable-next-line max-len
      descricao:'A remada com barra em T é um exercício de treinamento de força que imita o movimento de remar um barco. O objetivo é fortalecer os músculos que trazem os braços em direção ao corpo, bem como aqueles que movem as omoplatas em direção à coluna. A linha t-bar pode permitir que você levante mais peso. Devido à natureza desse movimento, você pode alavancar mais peso.',
      pagina: ''
    },
    {
      nome: 'LEVANTAMENTO TERRA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif',
        // eslint-disable-next-line max-len
      descricao:'O levantamento terra é um dos exercícios compostos mais eficazes. É expresso como um exercício de força básico em esportes de força, como o levantamento de peso. É o movimento mais popular do treinamento de força, pois trabalha muitos grupos musculares.',
      pagina: ''
    },
    {
      nome: 'REMADA POLIA ALTA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Kneeling-High-Pulley-Row.gif',
        // eslint-disable-next-line max-len
      descricao:'O treino de posterior pode ser feito 2 vezes por semana, em 3 séries de 8 a 12 repetições, dependendo do exercício.',
      pagina: ''
    }


  ];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  exibirMusculos(costa: IMusculos) {
    this.dadosService.guardarDados('costa', costa);
    this.route.navigateByUrl('/dados-costa');
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
