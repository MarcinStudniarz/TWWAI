"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
// Klasa opisująca punkt (x, y)
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Point;
}());
exports.Point = Point;
// Klasa opisująca prostokąt
var Rectangle = /** @class */ (function () {
    function Rectangle(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    Rectangle.prototype.move = function (dx, dy) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    };
    Rectangle.prototype.getWidth = function () {
        return this.topRight.x - this.topLeft.x;
    };
    Rectangle.prototype.getHeight = function () {
        return this.topLeft.y - this.bottomLeft.y;
    };
    Rectangle.prototype.getArea = function () {
        return this.getWidth() * this.getHeight();
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
// Utwórz punkty i prostokąt
var pointA = new Point(0, 0);
var pointB = new Point(2, 0);
var pointC = new Point(0, 2);
var pointD = new Point(2, 2);
var rectangle = new Rectangle(pointA, pointB, pointC, pointD);
// Przesuń prostokąt
rectangle.move(1, 1);
console.log("Wymiary prostokąta:");
console.log("Szerokość:", rectangle.getWidth());
console.log("Wysokość:", rectangle.getHeight());
console.log("Pole prostokąta:", rectangle.getArea());
