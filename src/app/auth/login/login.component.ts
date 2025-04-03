import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent {
  loginForm: FormGroup;
  
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService 
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (this.authService.login(email, password)) {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/inicio']);
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }
  irARegistro() {
    this.router.navigate(['/registro']);
}
}