import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: any;
  editarItem: any = {
    Name: '',
    Age: '',
    Local:'',
    Total:'',
    Articulos: ''
  };

  constructor(private conexion: ConexionService) {
    this.conexion.listaItems().subscribe(item => {
      this.items = item;
    });
   }

  ngOnInit(): void {
  }
  eliminar(item) {
    this.conexion.eliminarItem(item);
  }
  editar(item) {
    this.editarItem = item;
  }
  agregarItemEditado(){
    this.conexion.EditarItem(this.editarItem);
  }
}
