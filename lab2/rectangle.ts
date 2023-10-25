
export class Point {
    constructor(public x: number, public y: number) {}

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}


export class Rectangle {
    constructor(
        public topLeft: Point,
        public topRight: Point,
        public bottomLeft: Point,
        public bottomRight: Point
    ) {}

    move(dx: number, dy: number) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }

    getWidth(): number {
        return this.topRight.x - this.topLeft.x;
    }

    getHeight(): number {
        return this.topLeft.y - this.bottomLeft.y;
    }

    getArea(): number {
        return this.getWidth() * this.getHeight();
    }
}


const pointA = new Point(0, 0);
const pointB = new Point(2, 0);
const pointC = new Point(0, 2);
const pointD = new Point(2, 2);

const rectangle = new Rectangle(pointA, pointB, pointC, pointD);


rectangle.move(1, 1);

console.log("Wymiary prostokąta:");
console.log("Szerokość:", rectangle.getWidth());
console.log("Wysokość:", rectangle.getHeight());
console.log("Pole prostokąta:", rectangle.getArea());
