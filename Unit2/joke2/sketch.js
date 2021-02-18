let state = 0 ;
let timer = 0 ;
function setup() {
  createCanvas(500, 500);
  textAlign (CENTER);
  textSize(40);
}

function draw() {
  switch (state) {
    case 0:
      background ('pink');
      text("Why do we tell actors to\n break a leg?",
       width/2, height/2);
      break;

      case 1:
      background ('gray');
      text("Because every play\n has a cast!", width/2, height/2);
      break;

  }
  timer++;
  if (timer > 3*60){
    state = state + 1;
    timer = 0;
    if (state > 1){
      state = 0;
    }
  }

}
