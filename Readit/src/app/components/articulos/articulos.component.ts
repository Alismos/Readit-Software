import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  template: 'The href is: {{href}}',
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public href: string = "";

  menus: any;
  constructor(private conexion: ConexionService, private router: Router) { 
    this.conexion.menuLista().subscribe(menu => {
      this.menus = menu;
    })
  }

  ngOnInit(): void { 
    var r = (this.router.url).split("/");
    console.log(this.router.url);
    this.href = r[3];
    console.log(this.href);
  }
}
