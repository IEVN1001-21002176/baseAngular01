export class OperacionesResistencias {
  private obtenerValor(color: string): number {
    switch (color) {
      case 'negro': return 0;
      case 'cafe': return 1;
      case 'rojo': return 2;
      case 'naranja': return 3;
      case 'amarillo': return 4;
      case 'verde': return 5;
      case 'azul': return 6;
      case 'morado': return 7;
      case 'gris': return 8;
      case 'grisclaro': return 9;
      default: return 0;
    }
  }

  private multiplicador(color: string): number {
    switch (color) {
      case 'negro': return 1;
      case 'cafe': return 10;
      case 'rojo': return 100;
      case 'naranja': return 1000;
      case 'amarillo': return 10000;
      case 'verde': return 100000;
      case 'azul': return 1000000;
      case 'morado': return 10000000;
      case 'gris': return 100000000;
      case 'grisclaro': return 1000000000;
      case 'dorado': return 0.1;
      case 'plata': return 0.01;
      default: return 0;
    }
  }

  private tolerancia(color: string): number {
    switch (color) {
      case 'dorado': return 5;
      case 'plata': return 10;
      default: return 0;
    }
  }

  calcular(banda1: string, banda2: string, banda3: string, tolerancia: string) {
    const digito1 = this.obtenerValor(banda1);
    const digito2 = this.obtenerValor(banda2);
    const multiplicador = this.multiplicador(banda3);
    const toleranciaPorc = this.tolerancia(tolerancia);

    const valor = (digito1 * 10 + digito2) * multiplicador;
    const valorMin = valor - (valor * toleranciaPorc / 100);
    const valorMax = valor + (valor * toleranciaPorc / 100);

    return {
      banda1,
      banda2,
      banda3,
      tolerancia,
      valor,
      valorMin,
      valorMax,
      toleranciaPorc
    };
  }
}
