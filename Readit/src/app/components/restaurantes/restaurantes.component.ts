import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styles: [
  ]
})
export class RestaurantesComponent implements OnInit {

  restaurantes: any;

  constructor(private conexion: ConexionService) {
    this.conexion.restaurantesLista().subscribe(restaurante => {
      this.restaurantes = restaurante;
    })
   }
  ngOnInit(): void {
  }
  
  share() {
    window.alert('The product has been shared!');
  }

}
