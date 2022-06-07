import { Circle } from "./cirle";

export class Cylinder extends Circle {
  _height: number;
  _volume: number;
  constructor(radius: number, color: string, height: number) {
    super(radius, color);
    this._height = height;
    this._volume = this._area * this._height;
  }
  get height() {
    return this._height;
  }
  set height(height) {
    this._height = height;
  }
  get volume() {
    return this._volume;
  }
}
