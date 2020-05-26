import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public usuario: any = {};

  constructor( private afs: AngularFirestore,
               public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
      console.log('Estado del usuario: ', user);

      if (!user){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })
 }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }



  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
    window.location.reload();
  }
}
