let x = 0;
let state = 0;
let timer = 0;
let y = 0;
var mic;
var vol;

function setup() {
  createCanvas(500, 500);
  textSize(20);
  textAlign (CENTER);
  rectMode (CENTER);
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  switch (state) {
    case 0:
      background('pink');
      text("Click to begin!", 250, 250);
      text ("Let's go on an adventure with Mushy!", 250, 300);
      break;
    case 1:
      background ('green');
      ground ();
      text("Wait for Mushy to cross the screen!", 250, 100);
      x = x + 5;
      if (x > width) {
        state = state + 1;
        x = -500;
      }
      push();
      translate(x, 0);
      avatar();
      pop();
      break;

    case 2:
      background('lightblue');
      ground ();
      text("Make some noise to help Mushy fly!", 250, 100);
        vol = (mic.getLevel().toFixed(2));
      if (vol > .001) {
        y = y + -5;
        if (y < -400){
          state = state + 1;
          y = 100;
        }
      }
      push ();
      translate (50, y);
      avatar();
      pop();
      break;

    case 3:
      background ("lightblue");
      clouds ();
      text("Make even more noise to help Mushy fly!", 250, 100);
        vol = (mic.getLevel().toFixed(2));
      if (vol > .01) {
        y = y + -5;
        if (y < -400){
          state = state + 1;
          y = 0;
        }
      }
      push ();
      translate (50, y);
      avatar();
      pop();
      break;

    case 4:
    background ("lightblue");
    text ("You helped Mushy make it to the top of the clouds!\nGreat Job!", 250, 50);
    cloudfloor();
    push ();
    translate (50, 0);
    avatar();
    pop();

    break;

  }
}

function mouseReleased (){
  state++;
  if (state > 4 ){
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}

function ground (){
  fill ('brown');
  rect (250, 450, 500, 110);
  fill ("black");
}

function cloudfloor (){
  push ();
  fill (230);
  noStroke ();
ellipse (50, 400, 100, 100);
ellipse (100, 400, 100, 100);
ellipse (150, 400, 100, 100);

ellipse (200, 400, 100, 100);
ellipse (250, 400, 100, 100);
ellipse (300, 400, 100, 100);

ellipse (350, 400, 100, 100);
ellipse (400, 400, 100, 100);
ellipse (450, 400, 100, 100);


ellipse (50, 450, 100, 100);
ellipse (100, 450, 100, 100);
ellipse (150, 450, 100, 100);

ellipse (200, 450, 100, 100);
ellipse (250, 450, 100, 100);
ellipse (300, 450, 100, 100);

ellipse (350, 450, 100, 100);
ellipse (400, 450, 100, 100);
ellipse (450, 450, 100, 100);

ellipse (25, 425, 100, 100);
ellipse (475, 425, 100, 100);
pop ();
}

function clouds (){
  push ();
  fill (230);
  noStroke ();
  ellipse (300, 100, 100, 100);
  ellipse (350, 100, 100, 100);
  ellipse (400, 100, 100, 100);

  ellipse (100, 250, 100, 100);
  ellipse (150, 250, 100, 100);
  ellipse (200, 250, 100, 100);

  ellipse (300, 400, 100, 100);
  ellipse (350, 400, 100, 100);
  ellipse (400, 400, 100, 100);
  pop ();
}

function avatar() {
  fill('black');
  translate(0, -50);
  fill('white');
  quad(100, 310, 150, 340, 150, 360, 100, 330);
  quad(300, 310, 250, 340, 250, 360, 300, 330);
  rect(160, 420, 20, 50);
  rect(240, 420, 20, 50);
  rect(200, 350, 100, 100);
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
