import { LoginComponent } from './pages/login/login.component';
import { ItensCardapioComponent } from './pages/itensCardapio/itensCardapio.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'pedidos', pathMatch: 'full'},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'mesas', component: MesasComponent},  
  { path: 'cardapio', component: CardapioComponent},
  { path: 'estoque', component: EstoqueComponent},  
  { path: 'financeiro', component: FinanceiroComponent},
  { path: 'funcionarios', component: FuncionariosComponent},
  { path: 'cardapio/itens-do-cardapio', component: ItensCardapioComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
