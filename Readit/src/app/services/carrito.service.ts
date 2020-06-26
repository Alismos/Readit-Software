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

  getTotPrice(){
    var price = 0;
    for(var i = 0; i < this.items.length; i++){
      price = price + this.items[i].precio;
    }
    return price;
  }

  getTotArticulos(){
    var price = '';
    for(var i = 0; i < this.items.length; i++){
      price = this.items[i].Nombre + ', ' + price;
    }
    return price;
  }

  cleanCart(){
    this.items =[];
    return this.items;
  }
  constructor() { }
}
