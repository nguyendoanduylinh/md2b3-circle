import { Circle } from "./cirle";
import { Cylinder } from "./cylinder";

let circle: Circle = new Circle(20, "Yellow");
let cylinder: Cylinder = new Cylinder(10, "Red", 10);

console.log(circle._radius);
console.log(circle._color);
console.log(circle._area);
console.log(cylinder._radius);
console.log(cylinder._color);
console.log(cylinder._area);
console.log(cylinder._height);
console.log(cylinder._volume);
