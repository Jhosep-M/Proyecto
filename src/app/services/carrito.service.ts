import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

  obtenerCarrito() {
    return this.carrito;
  }

  agregarProducto(producto: any) {
    const existente = this.carrito.find(p => p.nombre === producto.nombre);
    if (existente) {
      existente.cantidad += 1; // Si ya está en el carrito, aumentar la cantidad
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  eliminarProducto(nombre: string) {
    this.carrito = this.carrito.filter(p => p.nombre !== nombre);
  }

  aumentarCantidad(producto: any) {
    const item = this.carrito.find(p => p.nombre === producto.nombre);
    if (item) {
      item.cantidad += 1;
    }
  }

  disminuirCantidad(producto: any) {
    const item = this.carrito.find(p => p.nombre === producto.nombre);
    if (item && item.cantidad > 1) {
      item.cantidad -= 1;
    } else {
      this.eliminarProducto(producto.nombre); // Si la cantidad es 1 y se reduce, eliminar el producto
    }
  }

  calcularTotal(): number {
    return this.carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }
}


