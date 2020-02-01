// Coding Challenge #3
// Written by Jake Everhart

let snake;
const scale = 20;
let food;

function setup() {
	let canvas = createCanvas(600, 600);
  canvas.parent("project-view");
	snake = new Snake();
	frameRate(10);
	pickLocation();
}

// select random location within grid and spawn food there
function pickLocation() {
	let cols = floor(width / scale);
	let rows = floor(height / scale);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scale);
}

function draw() {
	background(51);
	snake.update();
	snake.show();
	snake.death();

	// create next food
	if (snake.eat(food)) {
		pickLocation();
	}

	fill(255, 0, 100);
	rect(food.x, food.y, scale, scale);
}

// if snake direction != key direction, update to match
function keyPressed() {
	if (keyCode === UP_ARROW) {
		if (snake.checkDir(0, 1) === true) {
			// do nothing
		}
		else {
			snake.dir(0, -1);
		}
		// prevent default scrolling behavior
		return false;
	}
	else if (keyCode === DOWN_ARROW) {
		if (snake.checkDir(0, -1) === true) {
			// do nothing
		}
		else {
			snake.dir(0, 1);
		}
		// prevent default scrolling behavior
		return false;
	}
	else if (keyCode === LEFT_ARROW) {
		if (snake.checkDir(1, 0) === true) {
			// do nothing
		}
		else {
			snake.dir(-1, 0);
		}
	}
	else if (keyCode === RIGHT_ARROW) {
		if (snake.checkDir(-1, 0) === true) {
			// do nothing
		}
		else {
			snake.dir(1, 0);
		}
	}
}
