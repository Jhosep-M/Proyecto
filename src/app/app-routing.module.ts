import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { CarritoComponent } from './pages/carrito/carrito.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
 
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },  
  { path: 'carrito', component: CarritoComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
