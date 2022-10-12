import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material.module';
import { TitleComponent } from './components/title/title.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CardPedidosComponent } from './components/card-pedidos/card-pedidos.component';
import {CardNumericInfoComponent} from './components/card-numeric-info/card-numeric-info.component';
import {CardMesaComponent} from './components/card-mesa/card-mesa.component';
import { MesasComponent } from './pages/mesas/mesas.component';

@NgModule({
  declarations: [					
    AppComponent,
    PedidosComponent,
    CardapioComponent,
    MesasComponent,
    MenuComponent,    
    TitleComponent,
    EstoqueComponent,            
    CardPedidosComponent,
    CardNumericInfoComponent,
    CardMesaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
