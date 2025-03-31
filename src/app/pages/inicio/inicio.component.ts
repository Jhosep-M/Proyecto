import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  productos = [
    {
      nombre: 'Laptop Gamer',
      descripcion: 'Laptop de alto rendimiento para juegos.',
      precio: 1200,
      imagen: 'assets/img/LaptopGamer.jpg'
    },
    {
      nombre: 'Smartphone',
      descripcion: 'Teléfono inteligente con excelente cámara.',
      precio: 800,
      imagen: 'https://via.placeholder.com/300'
    },
    {
      nombre: 'Auriculares Bluetooth',
      descripcion: 'Auriculares con cancelación de ruido.',
      precio: 150,
      imagen: 'https://via.placeholder.com/300'
    }
  ];

}
