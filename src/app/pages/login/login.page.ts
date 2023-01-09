import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public userLogin: User = {};
  public userRegister: User = {};
  cPassword = '';
  private loading: any;
  confirm = false;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {

  }


  segmentChanged(event: any | string) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
    console.log(event)
  }
  async login() {
    await this.presentLoading();

    try {
       await this.authService.login(this.userLogin);

      this.router.navigate(['/tabs']);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();
    console.log(this.userRegister);
    try {
      if (this.cPassword !== this.userRegister.password) {
        this.presentToast('Senhas não conferem');
      } else {
        await this.authService.register(this.userRegister);
      }
    } catch (error) {
      this.loading.dismiss();
      this.presentToast(error.message);
    } finally {
      this.userRegister = {};
      this.slides.slidePrev();
      this.presentToast('cadastro realizado com sucesso!');
      this.loading.dismiss();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde..' });
    return this.loading.present();

  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000 });
    toast.present();
  }


}





