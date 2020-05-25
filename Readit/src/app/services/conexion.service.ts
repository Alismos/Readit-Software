import { Injectable } from '@angular/core';
// Importando servicios de Firebse para el store
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export interface Item {Name: string; Age: number; }
export interface Restaurante {Nombre: string; Descripcion: string; url: string;}
export interface Menu {Nombre: string; Url: string; index: number; precio: number}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  private restauranteCollection: AngularFirestoreCollection<Restaurante>;
  restaurantes: Observable<Restaurante[]>;

  private menuCollection: AngularFirestoreCollection<Menu>;
  menus: Observable<Menu[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.restauranteCollection =afs.collection<Restaurante>('restaurantes');
    this.menuCollection = afs.collection<Menu>('menu');

    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data};
      });
    });

    this.restaurantes = this.restauranteCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Restaurante;
        const id = a.payload.doc.id;
        return { id, ...data};
      });
    });
    this.menus = this.menuCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Menu;
        const id = a.payload.doc.id;
        return { id, ...data};
      });
    });

   }

   listaItems(){
     return this.items;
   }

   restaurantesLista(){
     return this.restaurantes;
   }

   menuLista(){
     return this.menus;
   }

   agregarItem(item: Item){
     this.itemsCollection.add(item);
   }

   eliminarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
   }
   EditarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
   }
}
