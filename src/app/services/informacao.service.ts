import { Info } from 'src/app/interfaces/info';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class InformacaoService {
  private infosCollection: AngularFirestoreCollection<Info>;

  constructor(private afs: AngularFirestore) {
    this.infosCollection = this.afs.collection<Info>('Infos');
  }

  getInfos() {
    return this.infosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addInfos(info: Info) {
    return this.infosCollection.add(info);
  }

  getInfo(id: string) {
    return this.infosCollection.doc<Info>(id).valueChanges();
  }

  updateInfo(id: string, info: Info) {
    return this.infosCollection.doc<Info>(id).update(info);
  }

  deleteInfo(id: string) {
    return this.infosCollection.doc(id).delete();
  }
}
