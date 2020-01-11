// Coding Challenge #17
// Fractal Trees - Space Colonizer
// Written by Jake Everhart, challenge given by Daniel Shiffman

let tree;
const max_dist = 100;
const min_dist = 10;

function setup()
{
  createCanvas(400, 400);
  tree = new Tree();
}

function draw()
{
  background(51);
  tree.show();
  tree.grow();
}
