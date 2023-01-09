import { IExercicio } from './../Models/IExercicio.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IListaExercicios } from './../Models/IExercicioAPI.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable, pipe} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  lingua = 'pt-br';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=177437cbf21491529ecd69ac89d2bc80';

  constructor(private afs: AngularFirestore, public toastController: ToastController) { }



  getExercicio(nivel, date){
    const imc: number = Number(sessionStorage.getItem('imc').replace(',', '.'));
    let nivelTreino: string = 'basico';

    if (imc < 18.5) {
      nivelTreino = 'basico';
    }
    if (imc > 18.5 && imc <= 24.9) {
      nivelTreino = nivel;
    }
    if (imc > 25 && imc <= 29.9) {
      nivelTreino = 'basico';
    }
    if (imc > 30) {
      nivelTreino = 'basico';
    }

    console.log(`Treinos/treinos/${nivelTreino}/${date}`);
    const docRef = this.afs.collection(`Treinos/treinos/${nivelTreino}`, ref => ref.where('diaTreino', '==', date)).valueChanges();
    return docRef;
  }


  //getImc(peso, altura){
    //console.log(`User/Uid/${altura}/${peso}`);
   // const docRef = this.afs.collection(`User/Uid/${altura}`, ref => ref.where('diaTreino', '==', date)).valueChanges();
    //return docRef;
  //}


  async exibirErro(erro){
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API',
      duration: 1500,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
``
