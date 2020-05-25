import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

items: any;
  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.items = this.carritoService.getItems();
  }

}
