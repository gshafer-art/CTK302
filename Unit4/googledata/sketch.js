var bubbles = [];

function preload() {
  //song1 = loadSound("Song.m4a");
  //song1.pause();

}

function setup() {
  grad = loadImage("grad.jpg");
  imageMode(CENTER);
  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1-p_N-Gqf_ifq7bNkbnDVx2_hYzSLEvJq7LJ54KIAssk'; // this is KEY of the URL from the sheet
  //https://docs.google.com/spreadsheets/d/1-p_N-Gqf_ifq7bNkbnDVx2_hYzSLEvJq7LJ54KIAssk/edit?usp=sharing
  // https://docs.google.com/spreadsheets/d/1-p_N-Gqf_ifq7bNkbnDVx2_hYzSLEvJq7LJ54KIAssk/edit?usp=sharing
  //https://docs.google.com/spreadsheets/d/1-p_N-Gqf_ifq7bNkbnDVx2_hYzSLEvJq7LJ54KIAssk/edit?usp=sharing
  //  let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet

  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Material, data[i].Color, data[i].Dogs)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');
  image(grad, width / 2, height / 2, width, height);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(mymaterial, mycolor, mydogs) {
    this.Material = mymaterial;
    this.Color = mycolor;
    this.Dogs = mydogs;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(5), 0);
  }


  display() {
    if (this.Dogs == "Yes absolutely") {
      rect(this.pos.x, this.pos.y, 50, 50);
    }
    if (this.Dogs == "Maybe") {
      triangle(this.pos.x - 40, this.pos.y - 30,
        this.pos.x + 40, this.pos.y - 30,
        this.pos.x, this.pos.y + 50);
    }
    if (this.Dogs == "Definitely not") {
      ellipse(this.pos.x, this.pos.y, 50, 50);
    }

    text(this.Material, this.pos.x, this.pos.y - 10);
    text(this.Color, this.pos.x, this.pos.y + 10);
    //text(this.Dogs, this.pos.x, this.pos.y+20);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
  }

}
