function setup() {
  createCanvas(500, 500);
  background(255,102,255); 
}

function draw() {
  point(500-frameCount, frameCount);
}
