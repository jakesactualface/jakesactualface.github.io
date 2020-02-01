// Coding Challenge #15
// Fractal Trees - Object Oriented
// Written by Jake Everhart, challenge given by Daniel Shiffman

let tree = [];
let leaves = [];

let count = 0;

function setup()
{
  let canvas = createCanvas(400, 400);
  canvas.parent("project-view");

  let a = createVector(width/2, height);
  let b = createVector(width/2, height-100);
  let root= new Branch(a, b);

  tree[0] = root;
}

function mousePressed()
{
  if (count < 5)
  {
    for (let i = tree.length-1; i >= 0; i--)
    {
      if (!tree[i].finished)
      {
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
        tree[i].finished = true;
      }
    }
  }
  count++;

  if (count === 6)
  {
    for (let i = 0; i < tree.length; i++)
    {
      if (!tree[i].finished)
      {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

  if (count === 8)
  {
    for (let i = 0; i < leaves.length; i++)
    {
      leaves.length = 0;
      count = 5;
    }
  }
}

function draw()
{
  background(51);

  for (let i = 0; i < tree.length; i++)
  {
    tree[i].show();
  }

  for (let i = 0; i < leaves.length; i++)
  {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    if (count === 7)
    {
      leaves[i].y += random(0, 4);
      leaves[i].x += random(-1, 1);
    }
  }
}
