import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import {CarritoService } from 'src/app/services/carrito.service'
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  template: 'The href is: {{href}}',
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public href: number = 0;

  menus: any;

  constructor(private conexion: ConexionService, private carritoService: CarritoService, private router: Router) { 
 
    this.conexion.menuLista().subscribe(menu => {
      this.menus = menu;
    })
  }

  ngOnInit(): void { 
    var r = (this.router.url).split("/");
    this.href = parseInt(r[3]);
    console.log(this.href);
  }
  
  addToCart(menu){
    this.carritoService.addtoCart(menu)
    window.alert('Se añadio al carrito')
  }
  /**
   * index
i   */
  public index(i, p) {
    if(i==p){
      return true;
    }
    return false;
  }

}
