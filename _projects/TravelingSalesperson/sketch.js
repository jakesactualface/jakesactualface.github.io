// Coding Challenge #35
// Traveling Salesperson
// Written by Jake Everhart
// Challenge supplied by Daniel Shiffman (The Coding Train)

let nodes = [];
const totalNodes = 6;
const nodeSize = 5;

// total distance of node path
let recordDistance;
// current optimal node ordering
let bestEver;

function setup() {
	let canvas = createCanvas(400, 300);
  canvas.parent("project-view");

	// place nodes randomly
	for (let i = 0; i < totalNodes; i++) {
		let v = createVector(random(width), random(height), i);
		nodes[i] = v;
	}

	let d = calcDistance(nodes);
	recordDistance = d;
	bestEver = nodes.slice();
}

function draw() {
	background(0);

	fill(255);
	for (let i = 0; i < nodes.length; i++) {
		ellipse(nodes[i].x, nodes[i].y, nodeSize, nodeSize);
	}

	stroke(255);
	strokeWeight(1);
	noFill();
	beginShape();
	for (let i = 0; i < nodes.length; i++) {
		vertex(nodes[i].x, nodes[i].y);
	}
	endShape();

	stroke(255, 0, 255);
	strokeWeight(4);
	noFill();
	beginShape();
	for (let i = 0; i < bestEver.length; i++) {
		vertex(bestEver[i].x, bestEver[i].y);
	}
	endShape();

	let d = calcDistance(nodes);
	if (d < recordDistance) {
		recordDistance = d;
		bestEver = nodes.slice();
	}

	let largestI = -1;
	for (let i = 0; i < nodes.length - 1; i++) {
		if (nodes[i].z < nodes[i + 1].z) {
			largestI = i;
		}
	}

	if (largestI == -1) {
		noLoop();
		background(0);
		stroke(255, 0, 255);
		strokeWeight(4);
		noFill();
		beginShape();
		for (let i = 0; i < bestEver.length; i++) {
			vertex(bestEver[i].x, bestEver[i].y);
		}
		endShape();
		return;
	}

	let largestJ = -1;
	for (let j = 0; j < nodes.length; j++) {
		if (nodes[largestI].z < nodes[j].z) {
			largestJ = j;
		}
	}

	swap(nodes, largestI, largestJ);

	let endArray = nodes.splice(largestI + 1);
	endArray.reverse();
	nodes = nodes.concat(endArray);
}

// finds total distance of traversing nodes in order
function calcDistance(points) {
	let sum = 0;

	for (let i = 0; i < points.length - 1; i++) {
		let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
		sum += d;
	}

	return sum;
}

// swaps two nodes in an array
function swap(a, i, j) {
	let temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}
