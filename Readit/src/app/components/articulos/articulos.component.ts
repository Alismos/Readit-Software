import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router'

@Component({

  template: 'The href is: {{href}}',
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public href: string="";

  constructor(private router: Router){}

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
