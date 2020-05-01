import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
//Importando servicios de Firebse para el store
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


export interface Item {Name : string; Age : number; }
>>>>>>> master

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

<<<<<<< HEAD
  constructor() { }
=======
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data};
      });
    });
   }

   listaItems(){
     return this.items;
   }

   agregarItem(item: Item){
     this.itemsCollection.add(item);
   }
>>>>>>> master
}
