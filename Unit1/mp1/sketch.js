function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill ('brown');
  rect (90, 0, 45, 800);
  rect (20, 0, 20, 800);
  rect (210, 0, 30, 800);
  rect (320, 0, 50, 800);
  fill ('black');
  text (mouseX + "," + mouseY, 10,20) ;
  translate (0, -50);
  fill ('white');
  quad(100, 310, 150, 340, 150, 360, 100, 330);
  quad(300, 310, 250, 340, 250, 360, 300, 330);
  rect (150, 300, 100, 100);
  rect (150, 400, 20, 50);
  rect (230, 400, 20, 50);
  fill ('red');
  ellipse (200, 250, 200, 120);
  fill ('white');
  ellipse (140, 250, 30, 30);
  ellipse (230, 230, 30, 30);
  ellipse (175, 210, 30, 30);
  ellipse (270, 270, 30, 30);
  ellipse (200, 280, 30, 30);
  fill ('black');
  ellipse (170, 330, 10, 10);
  ellipse (230, 330, 10, 10);
  ellipse (200, 350, 20, 20);

   if (mouseIsPressed) {
   background ('lightblue')
     text (mouseX + "," + mouseY, 10,20) ;
     fill ('brown');
  rect (90, 0, 45, 800);
  rect (20, 0, 20, 800);
  rect (210, 0, 30, 800);
  rect (320, 0, 50, 800);
  fill ('green');
  ellipse (115, 70, 100, 100);
  ellipse (30, 70, 50, 50);
  ellipse (225, 70, 80, 80);
  ellipse (350, 70, 130, 130);
 translate (0, -50);
  fill ('white');
  quad(100, 310, 150, 340, 150, 360, 100, 330);
  quad(300, 310, 250, 340, 250, 360, 300, 330);
  rect (150, 300, 100, 100);
  rect (150, 400, 20, 50);
  rect (230, 400, 20, 50);
  fill ('red');
  ellipse (200, 250, 200, 120);
  fill ('white');
  ellipse (140, 250, 30, 30);
  ellipse (230, 230, 30, 30);
  ellipse (175, 210, 30, 30);
  ellipse (270, 270, 30, 30);
  ellipse (200, 280, 30, 30);
  fill ('black');
  ellipse (170, 330, 10, 10)
  ellipse (230, 330, 10, 10)
  ellipse (200, 350, 20, 20)
  } else {


  }

}


function mouseReleased () {
 print (mouseX + "," + mouseY) ;
}
