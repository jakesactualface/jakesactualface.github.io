// Coding Challenge #21
// Mandelbrot Set
// Written by Jake Everhart, challenge given by Daniel Shiffman

let minSlider;
let maxSlider;

function setup()
{
  let canvas = createCanvas(200, 200);
  canvas.parent("project-view");
  pixelDensity(1);

  minSlider = createSlider(-2.5, 0, -2.5, 0.01);
  minSlider.parent("project-view");
  maxSlider = createSlider(0, 2.5, 2.5, 0.01);
  maxSlider.parent("project-view");
}

function draw()
{
  const maxiterations = 50;
  loadPixels();

  for (let x = 0; x < width; x++)
  {
    for (let y = 0; y < height; y++)
    {
      let a = map(x, 0, width, minSlider.value(), maxSlider.value());
      let b = map(y, 0, height, minSlider.value(), maxSlider.value());

      let ca = a;
      let cb = b;

      let n = 0;

      while (n < maxiterations)
      {
        let aa = a*a - b*b;
        let bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if (abs(aa + bb) > 16)
        {
          break;
        }

        n++;
      }

      let bright = map(n, 0, maxiterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      if (n === maxiterations)
      {
        bright = 0;
      }

      let pix = (x + y*width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }

  updatePixels();
}
