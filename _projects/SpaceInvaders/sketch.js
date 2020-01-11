// Coding challenge #5
// Written by Jake Everhart

let ship;
let enemies = 8;
let score = 0;
let lossDistance = 60;
let maxLasers = 5;
let invaders = [];
let lasers = [];

// interval of static frames before formation moves
const frameInterval = 60;
let fCounter = 0;

function setup() {
	createCanvas(windowWidth * 0.8, windowHeight * 0.8);
	ship = new Ship();
	initializeInvaders(enemies);
}

function draw() {
	fCounter++;
	background(50);
	ship.show();
	ship.move();

	for (let i = 0; i < lasers.length; i++) {
		lasers[i].show();
		lasers[i].move();

		// kill any invaders which have been hit
		for (let j = 0; j < invaders.length; j++) {
			if (lasers[i].hits(invaders[j])) {
				invaders[j].death();
				score += 20;
			}
		}
	}

	// tracks whether the formation has reached the screen's edge
	let edge = false;

	for (i = 0; i < invaders.length; i++) {
		invaders[i].show();

		// check whether invador formation has reached screen edge
		if ((invaders[i].x + invaders[i].r > width) ||
			(invaders[i].x - invaders[i].r < 0)) {
			edge = true;
		}

		// invaders nearing the bottom of the screen is bad news!
		if (invaders[i].y > height - lossDistance) {
			debugger;
			gameOver();
		}
	}
	
	if (edge) {
		for (i = 0; i < invaders.length; i++) {
			invaders[i].shiftDown();
		}
	}

	if (fCounter > (frameInterval * 8) / enemies) {
		for (i = 0; i < invaders.length; i++) {
			invaders[i].move();
		}

		fCounter = 0;
	}

	// remove invaders which have been marked for deletion
	for (i = invaders.length - 1; i >= 0; i--) {
		if (invaders[i].toDelete) {
			invaders.splice(i, 1);
		}
	}

	// remove lasers which have been marked for deletion
	for (i = lasers.length - 1; i >= 0; i--) {
		if (lasers[i].toDelete) {
			lasers.splice(i, 1);
		}
	}

	// increase number of enemies in formation after player has cleared level
	if (invaders.length < 1) {
		enemies += 8;
		initializeInvaders(enemies);
	}
}

function gameOver() {
	document.write("Game Over. Your score: " + score);

	// clear game object arrays
	invaders.splice(0, invaders.length);
	lasers.splice(0, lasers.length);
	
	// end game loop
	noLoop();
}

function initializeInvaders(enemies) {
	let gridx = 0;
	let gridy = 0;

	for (let i = 0; i < enemies; i++) {
		if (gridx > 7) {
			gridx = 0;
			gridy++;
		}

		// assign initial canvas position based on formation position
		invaders[i] = new Invader((gridx * 80) + 80, (gridy * -60) + 120);
		gridx++;
	}
}

function keyReleased() {
	if (key != ' ') {
		ship.setDir(0);
	}
}

function keyPressed() {
	if (key === ' ' && lasers.length < maxLasers) {
		// fire new laser
		let laser = new Laser(ship.x, height - 50);
		{
			lasers.push(laser);
		}
		// prevent default scrolling behavior
		return false;
	}

	if (keyCode === RIGHT_ARROW) {
		ship.setDir(1);
	}
	else if (keyCode === LEFT_ARROW) {
		ship.setDir(-1);
	}
}

// on click, ship fires from mouse x-coordinate
function mouseClicked() {
	ship.x = mouseX;

	let laser = new Laser(ship.x, height - 50);
	{
		lasers.push(laser);
	}
}