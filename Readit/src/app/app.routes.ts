import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { PedidoComponent } from './components/pedido/pedido.component';

import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const approutes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'restaurantes', component: RestaurantesComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'restaurantes/articulos/:restauranteNombre', component: ArticulosComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const approuting = RouterModule.forRoot(approutes);
