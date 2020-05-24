import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  menus: any;
  constructor(private conexion: ConexionService) { 
    this.conexion.menuLista().subscribe(menu => {
      this.menus = menu;
    })
  }

  ngOnInit(): void { 
  }

}
