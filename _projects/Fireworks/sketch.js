// Coding Challenge #27
// Fireworks
// Written by Jake Everhart. Challenge given by Daniel Shiffman

let fireworks = [];
let gravity;

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("project-view");
  gravity = createVector(0, 0.2);
  stroke(255);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 25);
  if (random(1) < 0.03)
  {
    fireworks.push(new Firework());
  }
  for (let i = fireworks.length - 1; i >= 0; i--)
  {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done())
    {
      fireworks.splice(i, 1);
    }
  }
}