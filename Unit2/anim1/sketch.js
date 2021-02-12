let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  //rect(x,100,100,100);
  textSize(50);
  text("Good morning!", x, height / 2);
  x = x + 5;

  if (x > width) {
    x = -50;
  }
}
