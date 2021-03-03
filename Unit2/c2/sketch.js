let state = -1;
var mic;
var vol;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {

    case -1:
      background(100);
      text("please click screen to start", width / 2, height / 2);
      break;

    case 0:
      background(100);
      text("shhhh!!!", width / 2, height / 2);
      if (vol > .08) { // if the volume is LOUD?
        // do something
        state = 1;
      }
      break;

    case 1:
      background('red');
      text("QUIET DOWN!", width / 2, height / 2);
      timer++;
      if (timer > 3 * 60) {
        state = 0;
        timer = 0;
      }
      break;

  }
}

function mouseReleased() {
  if (state == -1) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
