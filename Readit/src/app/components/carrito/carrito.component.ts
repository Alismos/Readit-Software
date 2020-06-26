import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service'
import { ConexionService } from 'src/app/services/conexion.service'
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

items: any;

public price: number

articulos: any;

pedido: any = {
  Name: '',
  Age: 0, 
  Local: '',
  Total: 0,
  Articulos: ''
};
  constructor(private carritoService: CarritoService, private conexion: ConexionService) { }

  ngOnInit(): void {
    this.items = this.carritoService.getItems();
    this.price = this.carritoService.getTotPrice();
    this.articulos = this.carritoService.getTotArticulos();
    console.log(this.price);
    console.log(this.articulos);
  }
  agregar(){

    this.pedido.Total= this.price;
    this.pedido.Articulos = this.articulos;
    this.conexion.agregarItem(this.pedido);
    this.pedido.Name = '';
    this.pedido.Age = 0;
    this.pedido.Local = '';
    this.price = 0;
    this.articulos = '';
    this.items = this.carritoService.cleanCart();
    console.warn('Your order has been submitted: ', this.pedido.Name);

  }

}
