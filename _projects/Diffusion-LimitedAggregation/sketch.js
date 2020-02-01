// Coding Challenge #34
// Diffusion-Limited Aggregation
// Written by Jake Everhart
// Challenge supplied by Daniel Shiffman (The Coding Train)

let tree = [];
let walkers = [];
let r = 4;
const maxWalkers = 100;
const iterations = 100;
let finished;

function setup()
{
	let canvas = createCanvas(400, 400);
  canvas.parent("project-view");

	finished = false;

	for (let x = 0; x < width; x += r * 4) {
		tree.push(new Walker(x, height));
	}

	for (let i = 0; i < maxWalkers; i++) {
		walkers[i] = new Walker();
	}
}

function draw()
{
	background(0);

	for (let i = 0; i < tree.length; i++) {
		tree[i].show();
		if (tree[i].pos.y < 20) {
			finished = true;
		}
	}

	if (!finished) {
		for (let i = 0; i < walkers.length / 2; i++) {
			walkers[i].show();
		}

		for (let n = 0; n < iterations; n++) {
			for (let i = walkers.length - 1; i >= 0; i--) {
				walkers[i].walk();

				if (walkers[i].checkStuck(tree)) {
					tree.push(walkers[i]);
					walkers.splice(i, 1);
				}
			}
		}

		while (walkers.length < maxWalkers) {
			walkers.push(new Walker());
		}
	}
}
