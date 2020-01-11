// Code for Cell object for Coding Challenge #6
// Written by Jake Everhart

function Cell(pos, r, c) {

  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.r = r || 60;
  this.c = c || color(random(100, 255), 0, random(100, 255), 100);

  this.clicked = function(x, y) {
    const d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r/2) {
      return true;
    } else {
      return false;
    }
  }

  this.mitosis = function() {
    let cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  }

  this.move = function() {
    const vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }

}