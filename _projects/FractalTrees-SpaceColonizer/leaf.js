// Leaf code for Coding Challenge #17
// Fractal Trees - Space Colonizer
// Written by Jake Everhart, challenge given by Daniel Shiffman

function Leaf()
{
  this.pos = createVector(random(width), random(height-100));
  this.reached = false;

  this.show = function()
  {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }
}
