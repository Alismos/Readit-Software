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

pedido: any = {
  Name: '',
  Age: 0, 
  Local: ''
};
  constructor(private carritoService: CarritoService, private conexion: ConexionService) { }

  ngOnInit(): void {
    this.items = this.carritoService.getItems();
  }
  agregar(){
    this.conexion.agregarItem(this.pedido);
    this.pedido.Name = '';
    this.pedido.Age = 0;
    this.pedido.Local = '';
    this.items = this.carritoService.cleanCart();
    console.warn('Your order has been submitted', this.pedido.Name);

  }

}
