import { InformacaoService } from 'src/app/services/informacao.service';
import { Info } from './../../interfaces/info';
import { User } from './../../interfaces/user';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonModal, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  private infoId: string = null;
  public info: Info = {};
  private loading: any;
  private uid: any;
  public nome = '';
  public idade = 0;
  public peso = 0;
  public genero = '';
  constructor(
    private informacaoService : InformacaoService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private router: Router,
    private afa: AngularFireAuth,
  ) {}

  async ngOnInit() {
    this.uid = (await this.afa.currentUser).uid;
  }

  async register(){
   console.log(this.nome)
   console.log(this.idade)
   console.log(this.peso)
   console.log(this.genero)
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
