import { Observable } from 'rxjs';
import { AngularFireAuthModule } from '@angular/fire/compat/auth/public_api';


import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userCollection: AngularFirestoreCollection<User>;
  public uid: string;
  public user: any;
  peso: any;
  altura: any;
  private imc: number;

  auth = this.getAuth();
  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore)
     {
      this.userCollection = this.afs.collection<User>('User');
      }

      async login(user: User){
      await this.afa.signInWithEmailAndPassword(user.email, user.password);
      this.uid = (await (this.afa.currentUser)).uid;
      console.log(this.uid);

      this.getAndSaveImc(this.uid);

     }

    async register(user: User){
      await this.afa.createUserWithEmailAndPassword(user.email, user.password);
      this.uid = (await (this.afa.currentUser)).uid;
      this.saveUser(user);
     }

     async saveUser(user: User){
      delete user.password;
      return this.afs.doc('User/'+this.uid).set(user);
     }

     async updateUserAuth(email, password, newEmail){
      this.afa.signInWithEmailAndPassword(email, password).then((res)=>{
        res.user.updateEmail(newEmail);
      });
     }

     async updateUserData(user: User, uid){
      delete user.password;
      return this.afs.doc('User/'+uid).update(user);
     }

     async resetPassword(email){
      this.afa.sendPasswordResetEmail(email);
     }


     async getUser(uid: string) {
      const docRef = await this.afs.doc<User>('User/'+uid).valueChanges();
      return docRef;
     }

     logout(){
      this.uid = '';
      return this.afa.signOut();
     }

     getAuth(){
      return this.afa;
     }

     async getAndSaveImc(uid: string) {
      const userInfo = this.getUser(uid);

      (await userInfo).subscribe(res => {
        let imc: number = 0;
        const alturaM = Number(res.altura) / 100;

        imc = Number(res.peso) / (alturaM * alturaM );
        // console.log('altura', alturaM);
        // console.log('imc', imc);

        sessionStorage.setItem('imc', imc.toFixed(2));

      })

     }
}


