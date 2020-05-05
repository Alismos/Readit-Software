import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { PedidoComponent } from './components/pedido/pedido.component';

import { RouterModule, Routes } from '@angular/router';


const app_routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'restaurantes', component: RestaurantesComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
