import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';


@Component({
  selector: 'app-peito',
  templateUrl: './peito.page.html',
  styleUrls: ['./peito.page.scss'],
})
export class PeitoPage {


  titulo = 'Informações Peito';

  listaPeito: IMusculos[] = [
    {
      nome: 'SUPINO COM BARRA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif',
      // eslint-disable-next-line max-len
      descricao: 'O supino é um dos exercícios compostos mais populares na musculação. É um exercício importante não apenas para desenvolver os músculos do peito, mas também para aumentar a força e a resistência da parte superior do corpo.',
      pagina: ''
    },
    {
      nome: 'FLY (VOADOR)',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif',
        // eslint-disable-next-line max-len
      descricao:'O pec deck fly é um exercício eficaz para construir os músculos peitorais e fortalecer a parte superior do corpo. A máquina atua como um estabilizador aqui, enfatizando o músculo peitoral maior do peito e o músculo peitoral menor logo abaixo dele.',
      pagina: ''
    },
    {
      nome: 'PULLOVER',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif',
        // eslint-disable-next-line max-len
      descricao:'O pulôver com halteres é um dos raros exercícios que treinam a frente e as costas do corpo ao mesmo tempo. O principal objetivo deste exercício é trabalhar os músculos do peito e das costas, a fim de fortalecê-los e ajudar a ganhar massa muscular.',
      pagina: ''

    },
      {
      nome: 'CROSSOVER POLIA BAIXA ',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif',
        // eslint-disable-next-line max-len
      descricao:'Este movimento, que é realizado em uma máquina com cabos, é um dos movimentos do peito que você pode exercitar os músculos do peito de A a Z da maneira mais eficiente. Você pode direcionar seus músculos peitorais inferiores, superiores e médios separadamente, alterando a altura dos cabos na estação.',
      pagina: ''

    },
    {
      nome: 'CROSSOVER POLIA ALTA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif',
        // eslint-disable-next-line max-len
      descricao:'O cruzamento de cabo alto para baixo é um exercício eficaz de isolamento do tórax que se concentra no tórax médio e inferior. Quanto mais altos os cabos, mais você enfatizará seus peitorais inferiores. Quanto mais baixos os cabos, mais você atingirá os peitorais superiores.',
      pagina: ''

    },
    {
      nome: 'SUPINO INCLINADO COM BARRA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif',
        // eslint-disable-next-line max-len
      descricao:'O supino inclinado com barra é um exercício composto para a parte superior do tórax que contribui para o movimento de várias articulações e músculos. Como uma variante do supino plano, é considerado um dos melhores exercícios para construir uma parte superior do corpo mais forte e maior.',
      pagina: ''
    },
    {
      nome: 'SUPINO COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif',
        // eslint-disable-next-line max-len
      descricao:'O supino com halteres é um exercício clássico de fortalecimento da parte superior do corpo que trabalha o peito. Também trabalha os ombros, braços e serrátil anterior.',
      pagina: ''
    },
    {
      nome: 'CRUCIFIXO COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif',
        // eslint-disable-next-line max-len
      descricao:'O exercício de crucifixo com halteres tem como alvo as cabeças esternais dos músculos peitorais maiores, que são encontrados no peito, mas também fortalece os músculos tríceps, deltóides, bíceps, flexores do pulso e braquial.',
      pagina: ''
    },
    {
      nome: 'SUPINO INCLINADO COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif',
        // eslint-disable-next-line max-len
      descricao:'O supino inclinado com halteres é um exercício de força básico que traz benefícios para os músculos da parte superior do tórax e para os peitorais definidos desejados. Visando os peitorais, tríceps e deltóides, o exercício de pressão com halteres inclinado ajuda a construir a força da parte superior do corpo e aumentar a massa muscular.',
      pagina: ''
    },
    {
      nome: 'MERGULHO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Chest-Dips.gif',
        // eslint-disable-next-line max-len
      descricao:'é um exercício de cadeia cinética fechada. Como um movimento de peso corporal que visa seu peito e tríceps, os mergulhos têm vários benefícios em termos de melhorias de força, construção de massa e desempenho geral do condicionamento físico. Mergulhos são literalmente um dos melhores exercícios que você pode fazer para a parte superior do corpo. Tenha em mente que a posição do seu tronco afeta o foco do exercício. Uma leve inclinação para a frente é melhor para atingir os peitorais, e quanto mais você se inclinar para frente, mais você trabalhará os peitorais. Uma postura ereta muda o foco para o tríceps',
      pagina: ''
    },
    {
      nome: 'SUPINO CABO POLIA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Lying-Cable-Fly.gif',
        // eslint-disable-next-line max-len
      descricao:'O uso de cabos visa manter a tensão constante nos músculos alvos importantes para a hipertrofia muscular. Essa resistência contínua o torna um método mais benéfico para o ganho muscular. O exercício de mosca de cabo deitada visa as cabeças do esterno dos músculos peitorais maiores, que são encontrados no peito, mas também fortalece os músculos tríceps, deltóides, bíceps, flexores do pulso e braquial.',
      pagina: ''
    },
    {
      nome: 'SQUEEZE PRESS INCLINADO ',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Close-grip-Incline-Dumbbell-Press.gif',
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

  exibirMusculos(peito: IMusculos) {
    this.dadosService.guardarDados('peito', peito);
    this.route.navigateByUrl('/dados-peito');
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
