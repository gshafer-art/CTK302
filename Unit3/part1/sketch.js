let cars = [];

function setup() {
  createCanvas(500, 500);
  //for (let i = 0; i < 20; i++) {
  //  cars.push(new Car());
  //  }
  noStroke();
}

function draw() {
  background(100);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a < 0){
      cars.splice(i, 1);
    }
  }
}

// Car class
class Car {

  constructor() {
    this.pos = createVector(width / 2, height - 80);
    this.vel = createVector(random(-.8, .8), random(-10, -5));
    this.r = 255;//random(255);
    this.g = 255;//random(255);
    this.b = 255;//random(255);
    this.a = random(200, 255);
  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a-5;
  }
}
