import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
<<<<<<< HEAD
import {CarritoService } from 'src/app/services/carrito.service'
=======
import { Router } from '@angular/router'
>>>>>>> origin/master
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
<<<<<<< HEAD

  constructor(private conexion: ConexionService, private carritoService: CarritoService) { 
=======
  constructor(private conexion: ConexionService, private router: Router) { 
>>>>>>> origin/master
    this.conexion.menuLista().subscribe(menu => {
      this.menus = menu;
    })
  }

  ngOnInit(): void { 
<<<<<<< HEAD
    console.log(this.carritoService.getItems())
=======
    var r = (this.router.url).split("/");
    this.href = parseInt(r[3]);
    console.log(this.href);
  }

  /**
   * index
i   */
  public index(i, p) {
    if(i==p){
      return true;
    }
    return false;
>>>>>>> origin/master
  }

}
