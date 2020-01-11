// Coding Challenge #24
// Perlin Noise Flow Field
// Written by Jake Everhart. Challenge given by Daniel Shiffman

const inc = 0.1;
const scl = 10;
let cols, rows;

let zoff = 0;

let fr;

let particles = [];

let flowfield;

function setup()
{
  createCanvas(500, 500);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (let i = 0; i < 1500; i++)
  {
    particles[i] = new Particle();
  }
  background(255);
}

function draw()
{
  let yoff = 0;
  for (let y = 0; y < rows; y++)
  {
    let xoff = 0;
    for (let x = 0; x < cols; x++)
    {
      const index = (x + y * cols);
      const angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (let i = 0; i < particles.length; i++)
  {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}
