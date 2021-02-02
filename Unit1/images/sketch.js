let book;
let bread;
let chocolate;

function setup() {
  createCanvas(800, 800);
  book = loadImage("assets/book.jpg");
  bread = loadImage("assets/bread.jfif");
  chocolate = loadImage("assets/chocolate.jpg");

  imageMode(CENTER);
  rectMode (CENTER);
  textAlign(CENTER);
}

function draw() {
  background ('white');
  image(book, width/2, height/2, 200, 200);
  image(bread, width/2, height/2-200, 200, 200);
  image(chocolate, width/2, height/2+200, 200, 200);

}
