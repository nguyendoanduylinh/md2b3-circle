"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius, color) {
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
exports.Circle = Circle;
