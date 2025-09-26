import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  personas: number = 0;
  boletos: number = 0;
  opcion: string = '';
  precio: number = 12.00;
  total: number = 0;

  Procesar(): void {
  // Calculo total
    this.total = this.boletos * this.precio;

    // Validación por persona
    if (this.boletos > this.personas * 7) {
      alert("Cada persona puede comprar máximo 7 boletos.");
      return;
    }

    // Descuento por cantidad
    if (this.boletos >= 6) {
      this.total -= this.total * 0.15;
    } else if (this.boletos >= 3 ) {
      this.total -= this.total * 0.10;
    }

    // Descuento adicional por tarjeta Cineco
    if (this.opcion == 'Si') {
      this.total -= this.total * 0.10;
    }
  }
}
