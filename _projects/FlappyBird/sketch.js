// Coding Challenge #31
// Flappy Bird
// Written by Jake Everhart. Challenge given by Daniel Shiffman

let bird;
let pipes = [];
let score;
let finished;

function setup()
{
  let canvas = createCanvas(400, 600);
  canvas.parent("project-view");
  bird = new Bird();
  pipes.push(new Pipe());
  score = 0;
  finished = false;
}

function draw()
{
  background(30, 80, 200);
  fill(255);
  textSize(20);
  text(score, 20, 20);
  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length-1; i >= 0; i --) {
    pipes[i].update();
    pipes[i].show();

    if (pipes[i].hits(bird)) {
      gameOver();
      noLoop();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      score += 1;
    }
  }
}

function gameOver()
{
  fill(255);
  textSize(50);
  text(score, width/2, height/2);
  finished = true;
}

function newGame()
{
  score = 0;
  finished = false;
  bird.y = height/2;

  for (let i = pipes.length-1; i >= 0; i--) {
    pipes.splice(i, 1);
  }

  loop();
}

function keyPressed()
{
  if (key == ' ') {
    if (finished) {
      newGame();
    } else {
      bird.up();
    }
    // prevent default scrolling behavior
    return false;
  }
}
