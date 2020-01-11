// Bird object code for Coding Challenge #31
// Flappy Bird
// Written by Jake Everhart. Challenge given by Daniel Shiffman

function Bird()
{
  this.y = height/2;
  this.x = 50;
  this.r = 16;
  this.gravity = 0.6;
  this.lift = -30;
  this.velocity = 0;

  this.show = function()
  {
    push();
    translate(this.x, this.y);
    fill(255, 10, 10);
    ellipse(0, 0, this.r*2, this.r*2);
    fill(255);
    noStroke();
    ellipse(this.r/2, -this.r/2, 10, 10);
    fill(0);
    ellipse((this.r/2)+4, -(this.r/2)-2, 4, 4);
    fill(255, 200, 0);
    ellipse(this.r, 0, 8, 8);
    stroke(0);
    line(this.r+2, 3, this.r-2, 0);

    if (this.velocity > 0) {
      rotate(PI/3.0);
      fill(255);
      ellipse(-10, 10, 20, 10);
    } else {
      rotate(-PI/3.0);
      fill(255);
      ellipse(-10, -10, 20, 10);
    }

    pop();
  }

  this.up = function()
  {
    this.velocity += this.lift;
  }

  this.update = function()
  {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
