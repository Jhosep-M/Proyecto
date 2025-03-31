import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  register(email: string, password: string): void {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users)); // ✅ Guarda en localStorage
  }

  login(email: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user: any) => user.email === email && user.password === password);

    if (userExists) {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }

    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn'); 
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  
}
