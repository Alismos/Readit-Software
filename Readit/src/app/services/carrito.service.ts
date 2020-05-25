import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items = [];

  addtoCart(articulo){
    this.items.push(articulo);
  }

  getItems(){
    return this.items;
  }

  cleanCart(){
    this.items =[];
    return this.items;
  }
  constructor() { }
}
