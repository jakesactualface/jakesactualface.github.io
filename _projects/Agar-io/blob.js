// Blob object code for Coding Challenge #32
// Agar.io
// Written by Jake Everhart. Challenge given by Daniel Shiffman

function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0, 0);

  this.eats = function(other) {
    let d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      let sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum/PI);
      return true;
    } else {
      return false;
    }
  }

  this.grows = function() {

  }

  this.show = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.update = function() {
    let newvel = createVector(mouseX-(width/2), mouseY-(height/2));
    newvel.setMag(3);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }
}
