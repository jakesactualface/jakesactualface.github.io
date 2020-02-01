// Coding Challenge #32
// Agar.io
// Written by Jake Everhart. Challenge given by Daniel Shiffman

let blob;
let blobs = [];
let zoom = 1;

function setup()
{
  let canvas = createCanvas(600, 600);
  canvas.parent("project-view");
  blob = new Blob(0, 0, 64);
  for (let i = 0; i < 200; i++) {
    let x = random(-width, width);
    let y = random(-height, height);
    blobs[i] = new Blob(x, y, 16);
  }
}

function draw()
{
  background(0);
  translate(width/2, height/2);
  let newzoom = 64/blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (let i = blobs.length-1; i >= 0; i--) {
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
      blob.grows();
    }
  }
  
  blob.show();
  blob.update();

  for (let i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}
