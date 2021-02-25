var mic;
var vol;
var c = 'green';
let x = 0 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .05) { // if the volume is LOUD?
    // do something
    x = x + 5;
    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
    if (x > width){
      x = 0;
    }
  }
  push ();
  translate (x, 0);
  avatar();
  pop();

function avatar (){
  fill ("yellow");
  rect(100, 100, 100, 100) ;
  ellipse (75, 75, 60, 60);
  fill ("blue");
  rect (100, 200, 100, 100);
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
