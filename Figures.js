function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(204, 153, 255);
  fill (255, 204, 255);
  stroke(102, 0, 102);
  strokeWeight(2);
  arc(105, 55, 70, 70, PI, PI+QUARTER_PI);
  arc(200, 55, 150, 70, PI, 0);
  fill (153, 204, 255);
  stroke(0, 51, 204);
  ellipse (105 ,100, 120, 50);
  ellipse (300 ,100, 80, 50);
  fill (153, 255, 153);
  stroke(0, 153, 51);
  circle(105, 150, 10);
  circle(200, 150, 100);
  strokeWeight(10);
  line(50, 200, 300, 50);
  point(100, 200);
  strokeWeight(2);
  quad(50, 210, 50, 310, 200, 305, 180, 230);
  rect(300,150,70, 150);
  square(210, 220, 70);
  triangle(50, 400, 50, 350, 350, 400);
}
