// Coding Challenge #23
// 2D Supershapes
// Written by Jake Everhart. Challenge given by Daniel Shiffman

const n1 = 1;
const n2 = 1;
const n3 = 1;
let m = 5;
let a = 1;
let b = 1;

let osc = 0;

function setup() {
	let canvas = createCanvas(400, 400);
  canvas.parent("project-view");
}

// creates a supershape, based on formula from Paul Bourke
// http://paulbourke.net/geometry/supershape/
function supershape(theta) {
	// splits formula into three parts
	let part1 = (1 / a) * cos(theta * m / 4);
	part1 = abs(part1);
	part1 = pow(part1, n2);

	let part2 = (1 / b) * sin(theta * m / 4);
	part2 = abs(part2);
	part2 = pow(part2, n3);

	let part3 = pow((part1 + part2), n1);

	// prevent division by 0
	if (part3 === 0) {
		return 0;
	}
	else {
		return (1 / part3);
	}
}

function draw() {
	m = map(sin(osc), -1, 1, 0, 10);
	osc += 0.01

	background(51);
	stroke(255);
	noFill();
	translate(width / 2, height / 2);

	let radius = 100;

	let total = 200;
	let increment = TWO_PI / total;

	beginShape();

	for (let angle = 0; angle < TWO_PI; angle += increment) {
		let r = supershape(angle);
		let x = radius * r * cos(angle);
		let y = radius * r * sin(angle);
		vertex(x, y);
	}

	endShape(CLOSE);
}
