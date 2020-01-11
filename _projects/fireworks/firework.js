// Firework code for Coding Challenge #27
// Fireworks
// Written by Jake Everhart. Challenge given by Daniel Shiffman

function Firework()
{
  this.hue = random(255);
  this.firework = new Particle(random(width), height, this.hue, false);
  this.bursted = false;
  this.particles = [];

  this.update = function()
  {
    if (!this.bursted)
    {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0)
      {
        this.bursted = true;
        this.burst();
      }
    }
    else
    {
      for (let i = this.particles.length - 1; i >= 0; i--)
      {
        this.particles[i].applyForce(gravity);
        this.particles[i].update();

        if (this.particles[i].done())
        {
          this.particles.splice(i, 1);
        }
      }
    }
  }

  this.burst = function()
  {
    for (let i = 0; i < 100; i++)
    {
      let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, true);
      this.particles.push(p);
    }
  }

  this.done = function()
  {
    if (this.bursted && this.particles.length === 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  this.show = function()
  {
    if (!this.bursted)
    {
      this.firework.show();
    }
    else
    {
      for (let i = 0; i < this.particles.length; i++)
      {
        this.particles[i].show();
      }
    }
  }
}