import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito: any[] = [];
  totalCompra: number = 0;

  constructor(private carritoService: CarritoService) {
    this.carrito = this.carritoService.obtenerCarrito();
    this.calcularTotal();
  }

  eliminarProducto(nombre: string) {
    this.carritoService.eliminarProducto(nombre);
    this.actualizarCarrito();
  }

  aumentarCantidad(producto: any) {
    this.carritoService.aumentarCantidad(producto);
    this.actualizarCarrito();
  }

  disminuirCantidad(producto: any) {
    this.carritoService.disminuirCantidad(producto);
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    this.carrito = this.carritoService.obtenerCarrito();
    this.calcularTotal();
  }

  calcularTotal() {
    this.totalCompra = this.carritoService.calcularTotal();
  }
}
