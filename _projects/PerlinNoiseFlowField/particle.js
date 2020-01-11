// Particle code for Coding Challenge #24
// Perlin Noise Flow Field
// Written by Jake Everhart. Challenge given by Daniel Shiffman

function Particle()
{
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0 ,0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2;

  this.prevPos = this.pos.copy();

  this.update = function()
  {
    this.updatePrevious();
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force)
  {
    this.acc.add(force);
  }

  this.updatePrevious = function()
  {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function()
  {
    if (this.pos.x > width)
    {
      this.pos.x = 0;
      this.updatePrevious();
    }
    if (this.pos.x < 0)
    {
      this.pos.x = width;
      this.updatePrevious();
    }
    if (this.pos.y > height)
    {
      this.pos.y = 0;
      this.updatePrevious();
    }
    if (this.pos.y < 0)
    {
      this.pos.y = height;
      this.updatePrevious();
    }
  }

  this.follow = function(vectors)
  {
    const x = floor(this.pos.x / scl);
    const y = floor(this.pos.y / scl);
    const index = x + y * cols;
    const force = vectors[index];
    this.applyForce(force);
  }

  this.show = function()
  {
    stroke(0, 5);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}
