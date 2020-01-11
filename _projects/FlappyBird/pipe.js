// Pipe object code for Coding Challenge #31
// Flappy Bird
// Written by Jake Everhart. Challenge given by Daniel Shiffman

function Pipe()
{
  this.mingap = 50;
  this.top = random((height/2) - this.mingap);
  this.bottom = random((height/2) - this.mingap);
  this.x = width;
  this.w = 20;
  this.speed = 3;
  this.highlight = false;

  this.hits = function(bird)
  {
    var hitflag = false;

    if (bird.x+bird.r > this.x && bird.x-bird.r < this.x+this.w) {
      if (bird.y-bird.r < this.top || bird.y+bird.r > height-this.bottom) {
        hitflag = true;
        this.highlight = true;
      }
    } else {
      this.highlight = false;
    }

    return hitflag;
  }

  this.offscreen = function()
  {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function()
  {
    fill(0, 255, 0);

    if (this.highlight) {
      fill(255, 0, 0);
    }

    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function()
  {
    this.x -= this.speed;
  }
}
