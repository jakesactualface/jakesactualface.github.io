// Coding Challenge #19
// Superellipse
// Written by Jake Everhart, challenge given by Daniel Shiffman

// user interaction slider
let slider;

function setup() {
	let canvas = createCanvas(400, 400);
  canvas.parent("project-view");
	slider = createSlider(0, 10, 2, 0.01);
	slider.parent("project-view");
}

function draw() {
	background(51);

	let a = 200;
	let b = 100;
	let n = slider.value();
	stroke(255);
	noFill();
	translate(width / 2, height / 2);

	// create shape from slider value
	beginShape();

	for (let angle = 0; angle < TWO_PI; angle += 0.1) {
		let na = 2 / n;
		let x = pow(abs(cos(angle)), na) * a * Math.sign(cos(angle));
		let y = pow(abs(sin(angle)), na) * b * Math.sign(sin(angle));

		vertex(x, y);
	}

	endShape(CLOSE);
}
