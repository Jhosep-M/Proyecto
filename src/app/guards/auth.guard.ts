
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {//sirve para proteger las rutas si no esta registrado 
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); // ✅ Si no ha iniciado sesión, redirige a login
      return false;
    }
  }
}