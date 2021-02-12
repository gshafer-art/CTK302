let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background('lightblue');

push();
translate(x, 0);
avatar();
pop();

x = x + 10;
if (x > width) {
  x = -500;
}
}



function avatar() {

  fill('black');
  translate(0, -50);
  fill('white');
  quad(100, 310, 150, 340, 150, 360, 100, 330);
  quad(300, 310, 250, 340, 250, 360, 300, 330);
  rect(150, 300, 100, 100);
  rect(150, 400, 20, 50);
  rect(230, 400, 20, 50);
  fill('red');
  ellipse(200, 250, 200, 120);
  fill('white');
  ellipse(140, 250, 30, 30);
  ellipse(230, 230, 30, 30);
  ellipse(175, 210, 30, 30);
  ellipse(270, 270, 30, 30);
  ellipse(200, 280, 30, 30);
  fill('black');
  ellipse(170, 330, 10, 10);
  ellipse(230, 330, 10, 10);
  ellipse(200, 350, 20, 20);
}
