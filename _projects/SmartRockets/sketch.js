// Coding Challenge #29
// Smart Rockets
// Written by Jake Everhart. Challenge given by Daniel Shiffman.

let population;
let lifespan = 400;
let lifeP;
let count = 0;
let target;
let maxForce = 0.2;

let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;

function setup() {
	let canvas = createCanvas(400, 300);
  canvas.parent("project-view");
	population = new Population();
	lifeP = createP();
	target = createVector(width / 2, 50);
}

function draw() {
	background(0);
	population.run();
	lifeP.html(count);

	count++;

	if (count == lifespan) {
		population.evaluate();
		population.selection();
		count = 0;
	}

	fill(255);
	rect(rx, ry, rw, rh);

	ellipse(target.x, target.y, 16, 16);
}
