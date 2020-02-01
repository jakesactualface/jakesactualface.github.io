// Coding Challenge #14
// Fractal Trees - Recursive
// Written by Jake Everhart, challenge given by Daniel Shiffman

let angle = 0;
let slider;

function setup()
{
  let canvas = createCanvas(400, 400);
  canvas.parent("project-view");
  slider = createSlider(0, PI, PI/4, 0.01);
  slider.parent("project-view");
}

function draw()
{
  background(51);

  angle = slider.value();
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len)
{
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4)
  {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
