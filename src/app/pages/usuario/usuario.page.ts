import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Info } from 'src/app/interfaces/info';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { InformacaoService } from 'src/app/services/informacao.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  private infoId: string = null;
  public info: User;
  private loading: any;
  private infoSubscription: Subscription;
  public userInfo:Observable<User>;
  uid = '';


  constructor(
    private informacaoService : InformacaoService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private router: Router,
    private afa: AngularFireAuth,
    private activatedRoute: ActivatedRoute,
    )

    {

    }


    async ngOnInit() {
      this.uid = await this.getUid();
      this.userInfo = await this.authService.getUser(this.uid);
      this.userInfo.subscribe(res => this.setInfo(res));
    }

    async getUid(): Promise<string> {
      return (await this.afa.currentUser).uid;
    }

    setInfo(info){
      this.info = info;
    }

    ionViewWillEnter(){
      this.ngOnInit();
    }

    ngOnDestroy() {
      if (this.infoSubscription) this.infoSubscription.unsubscribe();
    }

    loadInfo() {
      this.infoSubscription = this.informacaoService.getInfo(this.infoId).subscribe(data => {
        this.info = data;
      });
    }



    async saveInfo() {
      await this.presentLoading();

      try{
        await this.authService.updateUserData(this.info, this.uid)
      }catch(error){
        this.presentToast(error);
      }finally{
        this.loading.dismiss();
        this.router.navigate(['/tabs/tab3']);

        this.authService.getAndSaveImc(this.uid);

      }

    }

    async presentLoading() {
      this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
      return this.loading.present();
    }

    async presentToast(message: string) {
      const toast = await this.toastCtrl.create({ message, duration: 2000 });
      toast.present();
    }

    podeMudarTreino(): boolean {
      const imc: number = Number(sessionStorage.getItem('imc').replace(',', '.'));
      return imc > 18.5 && imc <= 24.9
    }

  }
