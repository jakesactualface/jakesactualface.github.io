// Branch code for Coding Challenge #17
// Fractal Trees - Space Colonizer
// Written by Jake Everhart, challenge given by Daniel Shiffman

function Branch(parent, pos, dir)
{
  this.pos = pos;
  this.parent = parent;
  this.dir = dir;
  this.origDir = this.dir.copy();
  this.count = 0;
  this.len = 5;

  this.next = function()
  {
    this.dir.normalize();
    let nextDir = p5.Vector.mult(this.dir, this.len);
    let nextPos = p5.Vector.add(this.pos, nextDir);
    let nextBranch = new Branch(this, nextPos, this.dir.copy());
    return nextBranch;
  }

  this.reset = function()
  {
    this.dir = this.origDir.copy();
    this.count = 0;
  }

  this.show = function()
  {
    if (parent != null)
    {
      stroke(255);
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
    }
  }
}
