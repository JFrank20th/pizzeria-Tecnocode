import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
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

import { PedidoService } from './services/pedido.service';
import { RoleService } from './services/role.service';
import { PizzaService } from './services/pizza.service';
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './guard/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterRoleComponent,
    ListRoleComponent,
    UpdateRoleComponent,
    UpdateUserComponent,
    ListUserComponent,
    RegisterUserComponent,
    RegisterPizzaComponent,
    UpdatePizzaComponent,
    ListPizzaComponent,
    ListPedidosComponent,
    RegisterPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PedidoService,
    RoleService,
    PizzaService,
    UserService,
    TokenInterceptorService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
