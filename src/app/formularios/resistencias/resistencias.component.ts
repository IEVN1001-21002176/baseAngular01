import { Component } from '@angular/core';
import { OperacionesResistencias } from './operacionesRecistencias';
@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  colores: string[] = ['negro', 'cafe', 'rojo', 'naranja', 'amarillo', 'verde', 'azul', 'morado', 'gris', 'grisclaro'];
  multiplicadores: string[] = [...this.colores, 'dorado', 'plata'];
  tolerancias: string[] = ['dorado', 'plata'];

  banda1: string = '';
  banda2: string = '';
  banda3: string = '';
  tolerancia: string = '';

  resultado: any = null;

  private operaciones = new OperacionesResistencias();

  calcular() {
    if (this.banda1 && this.banda2 && this.banda3 && this.tolerancia) {
      this.resultado = this.operaciones.calcular(this.banda1, this.banda2, this.banda3, this.tolerancia);
    } else {
      this.resultado = null;
    }
  }
}
