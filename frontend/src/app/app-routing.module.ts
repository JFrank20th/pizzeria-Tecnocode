import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { RegisterPizzaComponent } from './admin/register-pizza/register-pizza.component';
import { UpdatePizzaComponent } from './admin/update-pizza/update-pizza.component';
import { ListPizzaComponent } from './admin/list-pizza/list-pizza.component';
import { ListPedidosComponent } from './admin/list-pedidos/list-pedidos.component';
import { RegisterPedidoComponent } from './pedido/register-pedido/register-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
  },
  {
    path: 'listUser',
    component: ListUserComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
  },
  {
    path: 'registerPizza',
    component: RegisterPizzaComponent,
  },
  {
    path: 'updatePizza',
    component: UpdatePizzaComponent,
  },
  {
    path: 'listPizza',
    component: ListPizzaComponent,
  },
  {
    path: 'listPedidos',
    component: ListPedidosComponent,
  },
  {
    path: 'registerPedido',
    component: RegisterPedidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
