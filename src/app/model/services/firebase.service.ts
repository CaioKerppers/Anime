import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Catalogo } from '../entities/Catalogo';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH: string = 'catalogos'

  constructor(private firestore: AngularFirestore) { }

  create(catalogo: Catalogo){
    return this.firestore.collection(this.PATH).add({nome: catalogo.nome, temporada: catalogo.temporada, datalancamento: catalogo.datalancamento, episodios: catalogo.episodios, estudio:catalogo.estudio});
  }

  read(){
    return this.firestore.collection(this.PATH).snapshotChanges();
  }

  update(catalogo: Catalogo){
    return this.firestore.collection(this.PATH).doc(catalogo.id).update({nome: catalogo.nome, temporada: catalogo.temporada, datalancamento: catalogo.datalancamento, episodios: catalogo.episodios, estudio:catalogo.estudio});
  }

  delete(catalogo: Catalogo){
    return this.firestore.collection(this.PATH).doc(catalogo.id).delete();
  }

}