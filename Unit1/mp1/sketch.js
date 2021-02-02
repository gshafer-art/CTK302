function setup() {
  createCanvas(600, 500);
  rectMode(CENTER);
}

function draw() {
  background (220);
  fill ('black');
  text (mouseX + "," + mouseY, 10,20) ;
  text ("hello world", 10, 10, 500, 300);
}


function mouseReleased () {
 print (mouseX + "," + mouseY) ;

}
