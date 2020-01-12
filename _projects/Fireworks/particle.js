// Particle code for Coding Challenge #27
// Fireworks
// Written by Jake Everhart. Challenge given by Daniel Shiffman

function Particle(x, y, hue, pop)
{
  this.pos = createVector(x, y);
  this.pop = pop;
  this.lifespan = random(75, 255);
  this.hue = hue;

  if (!pop)
  {
    this.vel = createVector(0, random(-12, -8));
  }
  else
  {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 7));
  }
  this.acc = createVector(0, 0);

  this.applyForce = function(force)
  {
    this.acc.add(force);
  }

  this.done = function()
  {
    if (this.lifespan < 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  this.update = function()
  {
    if (this.pop)
    {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function()
  {
    colorMode(HSB);

    if (this.pop)
    {
      strokeWeight(2);
      stroke(hue, 255, 255, this.lifespan);
    }
    else
    {
      strokeWeight(4);
      stroke(hue, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}