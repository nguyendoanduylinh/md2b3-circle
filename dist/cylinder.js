"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const cirle_1 = require("./cirle");
class Cylinder extends cirle_1.Circle {
    constructor(radius, color, height) {
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
exports.Cylinder = Cylinder;
