let myState = 0;
let myTimer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch(myState){
    case 0:
    background('silver');
    myTimer++ ;
    if (myTimer > 60*1){
      myTimer = 0;
      myState = 1;
    }
    break;

    case 1:
    background('gold');
    myTimer++ ;
    if (myTimer > 120*1){
      myTimer = 0;
      myState = 2;
    }
    break;

    case 2:
    background ('lightblue');
    myTimer++ ;
    if (myTimer > 90*1){
      myTimer = 0;
      myState = 0;
    }
    break;

  }
}