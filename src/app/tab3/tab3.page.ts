import { Info } from 'src/app/interfaces/info';
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable object-shorthand */
import {
  ActionSheetController,
  NavController,
  ToastController,
} from '@ionic/angular';
/* eslint-disable eol-last */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
import { Observable, Subscription } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonModal, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/interfaces/user';
import { AlertController } from '@ionic/angular';
import { InformacaoService } from '../services/informacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab3Page implements OnInit {
  private loading: any;
  uid = '';
  public userInfo: Observable<any>;
  altura: number;
  peso: number;
  imc: number;
  msgImc: string = '';

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private informacaoService: InformacaoService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private afa: AngularFireAuth,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.uid = (await this.afa.currentUser)?.uid;
    this.userInfo = await this.authService.getUser(this.uid);
    this.imc = Number(sessionStorage.getItem('imc'));
    this.getInfoBasedOnImc();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      this.presentToast(error);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['login']);
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async deleteInfo(id: string) {
    try {
      await this.informacaoService.deleteInfo(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  getInfoBasedOnImc() {
    const imc = Number(sessionStorage.getItem('imc').replace(',', '.'));
    const messageElement: any = document.getElementsByClassName('imc-message');

    if (imc < 18.5) {
      this.msgImc = 'Você está abaixo do peso.';
      messageElement[0].style.color = 'orange';
    }
    if (imc > 18.5 && imc <= 24.9) {
      this.msgImc = 'Você está normal.';
      messageElement[0].style.color = 'green';
    }
    if (imc > 25 && imc <= 29.9) {
      this.msgImc = 'Você está com sobrepeso.';
      messageElement[0].style.color = 'orange';
    }
    if (imc > 30) {
      this.msgImc = 'Você está obeso.';
      messageElement[0].style.color = 'red';
    }
  }
}
