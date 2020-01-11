// Coding Challenge #33
// Poisson-disc Sampling
// Written by Jake Everhart
// Challenge given by Daniel Shiffman

const r = 4;
const k = 30;
let grid = [];
const w = r / Math.sqrt(2);
let active = [];
let cols;
let rows;

function setup() {
	createCanvas(400, 400);
	background(0);
	strokeWeight(r * 0.5);

	// Step 0
	cols = floor(width / w);
	rows = floor(height / w);

	for (let i = 0; i < cols * rows; i++) {
		grid[i] = undefined;
	}

	// Step 1
	let x = random(width);
	let y = random(height);
	let i = floor(x / w);
	let j = floor(y / w);
	let pos = createVector(x, y);
	grid[i + j * cols] = pos;
	active.push(pos);
}

function draw() {
	background(0);

	for (let total = 0; total < 20; total++) {
		if (active.length > 0) {
			let randIndex = floor(random(active.length));
			let pos = active[randIndex];
			let found = false;

			for (let n = 0; n < k; n++) {
				let sample = p5.Vector.random2D();
				let m = random(r, 2*r);
				sample.setMag(m);
				sample.add(pos);

				let col = floor(sample.x / w);
				let row = floor(sample.y / w);

				if (col > -1 && row > -1 && col < cols && row < rows && !grid[col + row * col]) {
					let ok = true;
					for (let i = -1; i <= 1; i++) {
						for (let j = -1; j <= 1; j++) {
							let index = (col + i) + (row + j) * cols;
							let neighbor = grid[index];
							if (neighbor) {
								let d = p5.Vector.dist(sample, neighbor);
								if (d < r) {
									ok = false;
								}
							}
						}
					}

					if (ok) {
						found = true;
						grid[col + row * cols] = sample;
						active.push(sample);
					}
				}
			}

			if (!found) {
				active.splice(randIndex, 1);
			}
		}
	}

	for (let i = 0; i < grid.length; i++) {
		if (grid[i]) {
			stroke(255);
			strokeWeight(r * 0.5);
			point(grid[i].x, grid[i].y);
		}
	}

	for (let i = 0; i < active.length; i++) {
		stroke(255, 0, 255);
		strokeWeight(r * 0.5);
		point(active[i].x, active[i].y);
	}
}