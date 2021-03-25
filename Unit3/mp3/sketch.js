let cars = [];
let maxCars = 5;
let maxTimer = 500;
let timer = 0;
let frogPos;
let state = -1;
let song1, song2, song3, song4, berry, bkgd, clouds, basket, picnic, sunset;

function preload() {
  song1 = loadSound("assets/beats.m4a");
  song2 = loadSound("assets/bksong.m4a");
  song3 = loadSound("assets/song4.m4a");
  song4 = loadSound("assets/song5.m4a");
  //song2.loop();
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(750, 650);
  // Spawn an object
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 100);
//load images
berry = loadImage("assets/berry2.png");
bkgd = loadImage("assets/leaves.JPG");
clouds = loadImage("assets/clouds.jpg");
basket = loadImage("assets/basket2.png");
sunset = loadImage("assets/losescreen.jpg");
picnic = loadImage("assets/picnic.jpg");
//preload();
//load sound
 imageMode(CENTER);
 textAlign(CENTER);
 rectMode(CENTER);
}


function draw() {

  switch (state) {

    case -1:
    song1.stop();
    song4.stop();
    song3.play();
    state = 0;
    break;

    case 0:
      background('black');
      image(clouds, width/2, height/2, width, height);
      fill('white');
      push();
      noStroke();
      rect (width/2, height/2+5, 350, 100);
      pop();
      fill('black');
      textSize(35);
      text("Welcome to my\nberry catching game!", width/2, height/2-10);
      fill("white");
      text("Click to begin!", width/2, height/2+100);
      break;

    case 1:
      song3.stop();
      song2.play();
      state = 2;
      break;

    case 2:
      game();
      timer++;
      if (timer > maxTimer) {
        timer = 0;
        state = 3; //you lost
      }
      break;

      case 3:
        song1.play();
        state = 5;
        break;

    case 6: //win
      resetTheGame();
      background('black');
      image(picnic, width/2, height/2, width, height);
      fill('white');
      textSize(25);
      text("You collected all the berries\n so now we can have a picnic!", width/2, 60);
      textSize(35);
      text("Click to play again!", 570, 600);
      break;

      case 4:
        song4.play();
        state = 6;
        break;

    case 5: //lose
      resetTheGame();
      background('black');
      image(sunset, width/2, height/2, width, height);
      fill('white');
      push();
      noStroke();
      rect(width/2, 120, 500, 100)
      pop();
      textSize(35);
      text("Click to try again!", width/2, 240);
      fill('black');
      textSize(25);
      text("Oh no! You didn't collect enough \nberries and now it's too late to eat them :(", width/2, 110);
      break;

  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 6:
    resetTheGame();
      state = -1;
      break;

    case 5:
    resetTheGame();
      state = -1;
      break;
  }
}

function resetTheGame() {
  song2.stop();
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function game() {
  image(bkgd, width/2, height/2, width, height);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  //check to see if array = 0
  if (cars.length == 0) {
    state = 4;
  }

  //frog code
  checkForKeys();
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 75, 75);
  image(basket, frogPos.x, frogPos.y, 150, 150);
}



function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

  if (frogPos.x > width) frogPos.x = width;
  if (frogPos.y > height) frogPos.y = height;
  if (frogPos.x < 0) frogPos.x = 0;
  if (frogPos.y < 0) frogPos.y = 0;
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    fill(this.col);
    image (berry, this.pos.x, this.pos.y);
    //rect(this.pos.x, this.pos.y, this.width, 25);
    // textSize(this.width) ;
    // text("WOOHOO", this.pos.x, this.pos.y);
    // image();
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}
