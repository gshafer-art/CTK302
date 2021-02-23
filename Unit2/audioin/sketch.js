var mic;
var vol;
var c = 'green' ;
let velocity = 0;
let x = 0;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();  // what does "new" mean?
  mic.start();
}


function draw() {
  background("yellow");
    fill('blue');
    rect(x, 200, 75, 20);
    x = x + velocity;
    if ( x > width){
      x = 0 ;
    }

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something
    velocity = 5;
  }
 if (vol < .20) { // if the volume is LOUD?
    velocity = 0;
  }
  if (vol > .10) { // if the volume is LOUD?
    velocity = 1;
  }
  if (vol > .30) { // if the volume is LOUD?
    velocity = 10;
  }
  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
