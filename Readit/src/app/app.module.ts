import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*Importando servicios de angular*/
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

/*Importando servicio*/
import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';


/*Rutas*/

import { app_routing } from './app.routes';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent,
    InicioComponent,
    ContactoComponent,
    RestaurantesComponent,
    PedidoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    app_routing
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
