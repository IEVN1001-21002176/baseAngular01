export class Distancia {
  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number
  ) {}

  calcular(): number {
  const sumX = this.x2 - this.x1;
  const sumY = this.y2 - this.y1;
  return Math.sqrt(sumX * sumX + sumY * sumY);
}
}
