let cars = [];
let maxCars = 5;
let maxTimer = 500;
let timer = 0;
let frogPos;
let state = 0;
let song2, berry, bkgd, clouds, basket, picnic, sunset;

//function preload() {
  //song2 = loadSound("assets/bksong.m4a");
  //song2.loop();
  //song2.pause();
//}

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
      game();
    //song2.play();
      timer++;
      if (timer > maxTimer) {
        timer = 0;
        state = 3; //you lost
      }
      break;

    case 2: //win
      resetTheGame();
    //song2.pause();
      background('black');
      image(picnic, width/2, height/2, width, height);
      fill('white');
      textSize(25);
      text("You collected all the berries\n so now we can have a picnic!", width/2, 60);
      textSize(35);
      text("Click to play again!", 570, 600);
      break;

    case 3: //lose
      resetTheGame();
    //song2.pause();
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

    case 2:
    resetTheGame();
      state = 0;
      break;

    case 3:
    resetTheGame();
      state = 0;
      break;
  }
}

function resetTheGame() {
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
    state = 2;
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
