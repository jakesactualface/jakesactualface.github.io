// Coding Challenge #30
// Phyllotaxis
// Written by Jake Everhart. Challenge given by Daniel Shiffman

let n = 0;
const c = 2;

function setup()
{
  let canvas = createCanvas(400, 400);
  canvas.parent("project-view");
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw()
{
  let a = n * 137.5;
  let r = c * sqrt(n);
  let x = r * cos(a) + width/2;
  let y = r * sin(a) + height/2;

  fill(a % 256, 255, 255);
  noStroke();
  ellipse(x, y, 4, 4);
  n++;
}
