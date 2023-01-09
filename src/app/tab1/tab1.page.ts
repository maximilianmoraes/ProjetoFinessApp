import { IExercicio } from './../Models/IExercicio.model';
import { ExercicioService } from './../services/exercicio.service';
import { Observable, pipe } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { DadosService } from './../services/dados.service';

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;


  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

    }
  }

  uid = '';
  userInfo:Observable<User>;
  titulo = 'Meu Plano';
  nivel: any;
  listaExercicios: any;
  exercicios: any;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router,
    private authService: AuthService,
    private afa: AngularFireAuth,
    private exercicioService: ExercicioService
  ) { }

    cronometro;
    tempo;
    cronometroIniciado = false;

    start(){
      this.cronometroIniciado = true;
      this.tempo = 0;
      this.cronometro = setInterval(() => {
        this.tempo = this.tempo + 1;
        console.log(this.tempo);
      }, 1000);
    }

    stop(){
      this.cronometroIniciado = false;
      clearInterval(this.cronometro);
    }

  exibirExercicio(exercicio: IExercicio) {
    this.dadosService.guardarDados('exercicio', exercicio);
    this.route.navigateByUrl('/dados-exercicio');
  }

  async getNivel(res){
    let date = new Date();
    let dateString = '';
    console.log(moment(date).format('dddd'))
    if(moment(date).format('dddd') === 'Sunday'){
      dateString = 'domingo'
    }
    else if(moment(date).format('dddd') === 'Monday'){
      dateString = 'Segunda-Feira'
    }
    else if(moment(date).format('dddd') === 'Tuesday'){
      dateString = 'Terça-Feira'
    }
    else if(moment(date).format('dddd') === 'Wednesday'){
      dateString = 'Quarta-Feira'
    }
    else if(moment(date).format('dddd') === 'Thursday'){
      dateString = 'Quinta-Feira'
    }
    else if(moment(date).format('dddd') === 'Friday'){
      dateString = 'Sexta-Feira'
    }
    else{
      dateString = 'sabado'
    }

    this.listaExercicios = this.exercicioService.getExercicio(res, dateString).subscribe(
      res => this.setExercicio(res)
    );
    //  this.listaExercicios.subscribe(res => this.setExercicio(res));

   }

  async ionViewWillEnter(){
    let subscribe;
    this.uid = (await this.afa.currentUser).uid;
    this.userInfo = await this.authService.getUser(this.uid);
    this.userInfo.subscribe(res =>{this.getNivel(res.nivel)});
  }

setExercicio(exercicio){
this.exercicios = exercicio;
console.log(this.exercicios);
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
