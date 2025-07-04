function Car() {}

Car.prototype.drive = function () {
  console.log("Vroom!");
};

var Maybach = new Car();

Maybach.drive();

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

var rect1 = new Rectangle(3, 4);

console.log(rect1.area());

function Square(length) {
  this.width = this.height = length;
}

Square.prototype = Object.create(Rectangle.prototype);

/*
All instances of Square will automatically have Square.prototype in their prototype chain, and because Square.prototype has Rectangle.prototype in its prototype chain, every Square will have access to the methods of Rectangle.
*/

var square1 = new Square(14);

console.log(square1.area());

Square.prototype.diagnol = function () {
  return Math.sqrt(this.area * 2);
};


