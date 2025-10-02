import { Component } from '@angular/core';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancias',
  standalone: false,
  templateUrl: './distancias.component.html',
  styleUrl: './distancias.component.css'
})
export class DistanciasComponent {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  distanciaResultado: number = 0;

  calcularDistancia(): void {
    const distancia = new Distancia(this.x1, this.y1, this.x2, this.y2);
    this.distanciaResultado = distancia.calcular();
  }
}
