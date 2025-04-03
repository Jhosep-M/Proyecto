import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
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
      imagen: 'public/Laptop.jpg'
    },
    {
      nombre: 'Smartphone',
      descripcion: 'Teléfono inteligente con excelente cámara.',
      precio: 800,
      imagen: 'public/Telefono.jpg'
    },
    {
      nombre: 'Auriculares Bluetooth',
      descripcion: 'Auriculares con cancelación de ruido.',
      precio: 150,
      imagen: 'public/Auriculares.jpg'
    },
    {
      nombre: 'Smartwatch',
      descripcion: 'Reloj inteligente con múltiples funciones de salud.',
      precio: 200,
      imagen: 'public/smartwatch.jpg'
    },
    {
      nombre: 'Teclado Mecánico',
      descripcion: 'Teclado mecánico con retroiluminación RGB.',
      precio: 100,
      imagen: 'public/Teclado.png'
    },
    {
      nombre: 'Mouse Gamer',
      descripcion: 'Ratón ergonómico con sensor de alta precisión.',
      precio: 75,
      imagen: 'public/mouse.jpg'
    },
    {
      nombre: 'Monitor 4K',
      descripcion: 'Monitor UHD con tasa de refresco de 144Hz.',
      precio: 500,
      imagen: 'public/monitor.jpg'
    },
    {
      nombre: 'Silla Ergonómica',
      descripcion: 'Silla gaming ergonómica con soporte lumbar.',
      precio: 300,
      imagen: 'public/silla.jpg'
    },
    {
      nombre: 'Tarjeta Gráfica',
      descripcion: 'GPU de última generación para juegos y diseño.',
      precio: 900,
      imagen: 'public/tarjetaGrafica.jpg'
    },
    {
      nombre: 'Disco Duro SSD',
      descripcion: 'Unidad de estado sólido de 1TB para almacenamiento rápido.',
      precio: 120,
      imagen: 'public/discoDuro.webp'
    },
    {
      nombre: 'Fuente de Poder',
      descripcion: 'Fuente de 750W certificada 80 Plus Gold.',
      precio: 130,
      imagen: 'public/FuenteDePoder.jpg'
    },
    {
      nombre: 'Procesador',
      descripcion: 'Procesador de última generación para alto rendimiento.',
      precio: 400,
      imagen: 'public/Procesador.jpg'
    },
    {
      nombre: 'Memoria RAM',
      descripcion: 'Kit de 32GB DDR5 de alta velocidad.',
      precio: 180,
      imagen: 'public/MemoriaRam.jpg'
    }
    
  ];
  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }

}
