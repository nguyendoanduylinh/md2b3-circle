export class Circle {
  _radius: number;
  _color: string;
  _area: number;
  constructor(radius: number, color: string) {
    this._radius = radius;
    this._color = color;
    this._area = this._radius * this._radius * Math.PI;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    this._radius = radius;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  get area() {
    return this._area;
  }
}
