import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.page.html',
  styleUrls: ['./biceps.page.scss'],
})

export class BicepsPage {

  titulo = 'Biceps';

  listaBiceps: IMusculos[] = [
    {
      nome: 'ROSCA COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Double-Arm-Dumbbell-Curl.gif',
      // eslint-disable-next-line max-len
      descricao: ' rosca direta com halteres também é conhecida como rosca bíceps. É um dos movimentos mais populares que vem à mente quando você pensa em treinamento de braço.',
      pagina: ''
    },
    {
      nome: 'ROSCA COM HALTERES ALTERNADO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'A rosca direta com halteres também é conhecida como rosca bíceps. É um dos movimentos mais populares que vem à mente quando você pensa em treinamento de braço.A rosca direta com halteres é um exercício básico de treinamento de força para construir músculos e força nos braços. Especificamente, a rosca direta com halteres trabalha todos os músculos da frente do braço. É um exercício altamente eficaz para maximizar o pico do bíceps. Além disso, você pode usar esse movimento para corrigir problemas de simetria. (por exemplo, se um bíceps for maior que o outro)',
      pagina: ''
    },
    {
      nome: 'ROSCA COM BARRA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'A rosca direta com barra é um exercício isolado que pode ajudar a aumentar o crescimento muscular, a potência e a força de preensão. Especificamente, a rosca direta trabalha todos os músculos da frente do braço. A rosca direta com barra é um exercício básico de treinamento de força para construir músculos e força nos braços.',
      pagina: ''

    },
      {
      nome: 'BICEPS CONCENTRADO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'O biceps concentrado é um ótimo movimento de braço para estimular as fibras musculares na parte superior do músculo braquial e do bíceps. Além disso, você pode usar esse movimento para corrigir problemas de simetria. (por exemplo, se um bíceps for maior que o outro) Como você vira o braço em direção ao corpo quando faz roscas de concentração, ajuda a colocar mais foco na cabeça longa do bíceps, que compõe a massa do pico do bíceps.',
      pagina: ''

    },
    {
      nome: 'ROSCA DIRETA BARRA W',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Close-Grip-Z-Bar-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'O treino de quadriceps pode ser feito 2 vezes por semana, em 2 séries de 12 a 14 repetições, dependendo do exercício.',
      pagina: ''

    },
    {
      nome: 'MARTELO POLIA BAIXA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/rope-bicep-curls.gif',
      // eslint-disable-next-line max-len
      descricao:'O primeiro alvo deste exercício são os músculos braquial e braquiorradial. A corda do cabo ajuda no movimento ascendente, permitindo que você aperte o bíceps para uma contração máxima. O desenvolvimento do músculo braquiorradial ajuda a fortalecer sua pegada e pode fazer com que os músculos do braço pareçam mais fortes e volumosos.',
      pagina: ''
    },
    {
      nome: 'SCOTT UNILATERAL',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Preacher-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'A rosca direta com halteres é um dos exercícios de construção de bíceps mais eficazes que você pode incorporar ao seu programa de treino de braço. O alvo principal do movimento de rosca do pregador com halteres é o músculo braquial. Você pode obter braços mais largos e grossos, visando a cabeça e o músculo braquial do bíceps com este exercício de curling exclusivo. Além disso, você pode usar esse movimento para corrigir problemas de simetria. (por exemplo, se um bíceps for maior que o outro)',
      pagina: ''
    },
    {
      nome: 'BARRA W BANCO SCOTT',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Z-Bar-Preacher-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'O curl de pregador EZ-bar é um dos exercícios de construção de braço mais eficazes que você pode incorporar ao seu programa de treino de braço. As barras EZ têm uma seção central ondulada que permite uma pegada semi-supinada. A barra Z reduz a tensão nos pulsos. Isso permite que o bíceps seja efetivamente isolado ao usar uma pegada amigável para as articulações. Portanto, permite que você tenha um treino mais saudável.',
      pagina: ''
    },
    {
      nome: 'ROSCA MARTELO ALTERNADA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'O primeiro alvo deste exercício é o músculo braquiorradial. O braquiorradial é um músculo superficial do antebraço localizado na lateral do antebraço. O desenvolvimento do músculo braquiorradial ajuda a fortalecer sua pegada e pode fazer com que os músculos do braço pareçam mais fortes e volumosos.',
      pagina: ''
    },
    {
      nome: 'ROSCA COM HALTERES ALTERNADA BANCO INCLINADO ',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Incline-Dumbbell-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'É um exercício altamente eficaz para maximizar o pico do bíceps. A rosca inclinada com halteres é um exercício de isolamento que trabalha a cabeça longa do bíceps, alonga e ajuda na contração com mais força durante o exercício. Se seu objetivo é obter braços mais fortes e maiores, você pode adicionar roscas inclinadas com halteres à sua rotina de exercícios.',
    pagina: ''
    },
    {
      nome: 'SCOTT MAQUINA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Preacher-Curl.gif',
      // eslint-disable-next-line max-len
      descricao:'O alvo principal do movimento de rosca do pregador de alavanca é o músculo braquial. Você pode obter braços mais largos e grossos, visando a cabeça e o músculo braquial do bíceps com este exercício de curling exclusivo. O movimento negativo realmente melhora o crescimento muscular, além de melhorar a força.',
      pagina: ''
    }


  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirMusculos(biceps: IMusculos) {
    this.dadosService.guardarDados('biceps', biceps);
    this.route.navigateByUrl('/dados-biceps');
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
