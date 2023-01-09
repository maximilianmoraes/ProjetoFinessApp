import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-ombro',
  templateUrl: './ombro.page.html',
  styleUrls: ['./ombro.page.scss'],
})
export class OmbroPage {

  titulo = 'Informações Ombro';

  listaOmbro: IMusculos[] = [
    {
      nome: 'SMITH MACHINE DESENVOLVIMENTO ATRÁS DO PESCOÇO ',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Smith-Machine-Behind-Neck-Press.gif',
      // eslint-disable-next-line max-len
      descricao: 'Este exercício, realizado com a ajuda de uma máquina Smith, é um exercício eficaz para desenvolver os músculos do ombro e aumentar a estabilidade e amplitude de movimento do ombro, mas exerce pressão sobre os músculos do manguito rotador que estabilizam as articulações do ombro. É por isso que acertar o movimento é mais importante do que levantar muito peso.',
      pagina: ''
    },
    {
      nome: 'SMITH MACHINE DESENVOLVIMENTO FRONTAL',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Shoulder-Press.gif',
         // eslint-disable-next-line max-len
      descricao:'A prensa de ombro da máquina Smith é um exercício baseado em máquina que tem como alvo os músculos deltóides anteriores. A máquina Smith imita uma barra, mas oferece mais equilíbrio, por isso pode ser mais adequada para iniciantes.',
      pagina: ''
    },
    {
      nome: 'DESENVOLVIMENTO FRONTAL COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif',
         // eslint-disable-next-line max-len
      descricao:'O Desenvolvimento com halteres é um dos movimentos mais básicos para desenvolver e fortalecer os músculos do ombro. Embora o foco deste exercício seja os músculos da frente do ombro, é um movimento popular que é frequentemente usado em treinos para fortalecer a parte superior do corpo.',
      pagina: ''

    },
      {
      nome: 'DESENVOLVIMENTO MAQUINA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif',
         // eslint-disable-next-line max-len
      descricao:'A pressão do ombro com alavanca é um dos movimentos eficazes usados ​​para desenvolver e fortalecer os músculos do ombro. Comparado ao treinamento com pesos livres, pode ser a escolha mais ideal para iniciantes, graças à amplitude de movimento fornecida pela máquina. Embora o foco deste exercício seja construir os músculos do ombro, você também pode incluí-lo em seus treinos para fortalecer a parte superior do corpo.',
      pagina: ''

    },
    {
      nome: 'DESENVOLVIMENTO BARRA LIVRE SENTADO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shoulder-Press.gif',
         // eslint-disable-next-line max-len
      descricao:'O desenvolvimento com barra é um dos movimentos mais básicos para desenvolver e fortalecer os músculos do ombro. Embora o foco deste exercício seja os músculos da frente do ombro, é um movimento popular que é frequentemente usado em treinos para fortalecer a parte superior do corpo.',
      pagina: ''

    },
    {
      nome: 'ELEVAÇÃO DE 6 VIAS COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-6-Ways-Raise.gif',
         // eslint-disable-next-line max-len
      descricao:'',
      pagina: ''
    },
    {
      nome: 'ELEVAÇÃO DE 4 VIAS COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-4-Ways-Lateral-Raise.gif',
         // eslint-disable-next-line max-len
      descricao:'',
      pagina: ''
    },
    {
      nome: 'ELEVAÇÃO ALTERNADA FRONTAL COM HALTERES',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Dumbbell-6-Ways-Raise.gif',
         // eslint-disable-next-line max-len
      descricao:'O levantamento frontal com halteres é um exercício isolado que visa as frentes e os lados dos ombros. Adequado para todos os níveis, este exercício de flexão do ombro é uma boa opção para aumentar a força, melhorar a mobilidade do ombro e moldar as cabeças dos ombros.',
      pagina: ''
    },
    {
      nome: 'ELEVAÇÃO FRONTAL CABO POLIA',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Two-Arm-Cable-Front-Raise.gif',
         // eslint-disable-next-line max-len
      descricao:'O exercício de elevação frontal com máquinas de cabo fornece tensão constante e resistência contínua ao levantar e abaixar o peso. Como o crescimento muscular e os ganhos de força dependem diretamente de quanto o músculo é alongado durante o exercício, as máquinas de cabo cansam os músculos mais rapidamente e proporcionam maior ganho de força.',
      pagina: ''
    },
    {
      nome: 'ELEVAÇÃO LATERAL SENTADO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Rear-Lateral-Dumbbell-Raise.gif',
         // eslint-disable-next-line max-len
      descricao:'A elevação lateral traseira com halteres sentado é um exercício de pesos livres que visa principalmente os ombros traseiros. É um exercício eficaz que você pode incluir em seu programa para isolar os músculos do ombro traseiro e fortalecer os músculos do manguito rotador.',
      pagina: ''
    },
    {
      nome: 'ELEVAÇÃO LATERAL CURVADO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Lateral-Raise.gif',
         // eslint-disable-next-line max-len
      descricao:'A elevação lateral inclinada é um exercício com pesos livres que visa principalmente os ombros traseiros. É um exercício eficaz que você pode incluir em seu programa para isolar os músculos do ombro traseiro e fortalecer os músculos do manguito rotador.',
      pagina: ''
    },
    {
      nome: 'ELEVAÇÃO LATERAL BRAÇO DOBRADO',
      imagem: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Bent-Arm-Laterl-Raise.gif',
         // eslint-disable-next-line max-len
      descricao:'Elevação lateral do braço dobrado, que obteve resultados bem-sucedidos em testes de eletromiografia realizados pelo Conselho Americano de Exercício; É um dos exercícios de ombro mais eficazes que se concentra nos músculos laterais do ombro. A elevação lateral do braço dobrado fortalece os músculos estabilizadores dos ombros e melhora o equilíbrio muscular. É também um dos exercícios isolados mais eficazes para crescer e desfiar as cabeças dos ombros.',
      pagina: ''
    }




  ];
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirMusculos(ombro: IMusculos) {
    this.dadosService.guardarDados('ombro', ombro);
    this.route.navigateByUrl('/dados-ombro');
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
