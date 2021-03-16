function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(204, 153, 255);
  ellipse(frameCount%500,height/3,60,60); // width
}
