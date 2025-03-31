import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
 
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },  

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: InicioComponent }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
