import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.some((user: any) => user.email === email)) {
        alert('El usuario ya está registrado');
        return;
      }
  
      this.authService.register(email, password);
      alert('Registro exitoso, ahora puedes iniciar sesión');
      this.router.navigate(['/login']);
    }
    
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }

}
