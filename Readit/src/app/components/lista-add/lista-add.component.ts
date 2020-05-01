import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ConexionService } from 'src/app/services/conexion.service';
>>>>>>> master

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  item:any = {
    Name:'',
    Age: 0
  }
  constructor(private servicio: ConexionService) { }
>>>>>>> master

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  agregar(){
    this.servicio.agregarItem(this.item);
    this.item.Name = '';
    this.item.Age = 0;
  }

>>>>>>> master
}
