function setup() {
  createCanvas(500, 500);
  textAlign (CENTER);
  f1 = loadFont("assets/CosmicBlaster.ttf");
  f2 = loadFont ("assets/myrlissa.otf")
}

function draw() {
background(100);
textSize (48);
textFont (f1);
text ("hello", width/2, height/2);
textFont (f2);
text ("world", width/2, height/2+50);
}
