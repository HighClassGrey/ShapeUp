const MAX = 600;
let container = document.getElementById('container');
//size info
let sqside = document.getElementById("sqside");
let recheight = document.getElementById('recheight');
let recwidth = document.getElementById('recwidth');
let cirRadius = document.getElementById('cirRadius');
let triHeight = document.getElementById('triHeight');
//buttons
let recButton = document.getElementById('recbutton');
let sqButton = document.getElementById('sqbutton');
let cirButton = document.getElementById('cirbutton');
let triButton = document.getElementById('tributton');

// click event
recButton.addEventListener('click', function newRectangle() {
    new Rectangle(recHeight.value, recWidth.value);
});
sqButton.addEventListener('click', function newSquare() {
    new Square(sqSide.value);
});
cirButton.addEventListener('click', function newCircle() {
    new Circle(cirRadius.value);
});
triButton.addEventListener('click', function newTriangle() {
    new Triangle(triHeight.value);
});


class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw() {
        let x = Math.floor(Math.random() * (MAX - this.width));
        let y = Math.floor(Math.random() * (MAX - this.height));
        this.div = document.createElement('div');
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        container.appendChild(this.div);
    };
    describe() {

    }
};

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.cssClass = 'rectangle';
        this.draw();
    };
};

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.cssClass = 'square';
        this.draw();
    };
};

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    };
};

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderBottomWidth = `${height}px`;
        this.div.style.borderRightWidth = `${height}px`;
    };
};
