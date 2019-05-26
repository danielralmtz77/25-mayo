var tempmtyc ;
var tempmtyf = 77;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  tempmtyc = tempFaC(tempmtyf);
  console.log(tempmtyf);
  console.log(tempmtyc);
}

function tempFaC(f){
var c = (f-32)/(1.8);
  return c;
}
