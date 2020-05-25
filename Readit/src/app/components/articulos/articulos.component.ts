import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import {CarritoService } from 'src/app/services/carrito.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  menus: any;

  constructor(private conexion: ConexionService, private carritoService: CarritoService) { 
    this.conexion.menuLista().subscribe(menu => {
      this.menus = menu;
    })
  }

  ngOnInit(): void { 
    console.log(this.carritoService.getItems())
  }

}
