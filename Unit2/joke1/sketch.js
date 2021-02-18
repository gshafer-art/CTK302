let state = 0 ;
function setup() {
  createCanvas(500, 500);
  textAlign (CENTER);
  textSize(40);
}

function draw() {
  switch (state) {
    case 0:
      background ('red');
      text("What did the brother cell\n say to his sister when\n she stepped on his foot?",
       width/2, height/2);
      break;

      case 1:
      background ('green');
      text("My-toe-sis!",
       width/2, height/2);
      break;

  }
}
function mouseReleased (){
  state++;
  if (state >1 ){
    state = 0;
  }
}
