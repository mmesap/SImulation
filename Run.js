
function setup() {
  createCanvas(500, 500); 
  a = width/2;
  b = height/2;
}

function draw() {
  background(255,102,255);
  circle(a,b, 50);
  if (((a-50) < mouseX) && (mouseX < (a+50)) && ((b-50) < mouseY) && (mouseY < (b+50))) {
    a = random (500);
    b = random (500);
  }
}
