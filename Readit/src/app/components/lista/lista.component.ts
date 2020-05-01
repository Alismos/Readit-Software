import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ConexionService } from 'src/app/services/conexion.service';
>>>>>>> master

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  items:any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaItems().subscribe(item=>{
      this.items = item;
    })
   }
>>>>>>> master

  ngOnInit(): void {
  }

}
