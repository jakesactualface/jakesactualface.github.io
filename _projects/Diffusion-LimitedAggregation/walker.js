// Walker code for Coding Challenge #34
// Diffusion-Limited Aggregation
// Written by Jake Everhart
// Challenge supplied by Daniel Shiffman (The Coding Train)

function Walker(x, y)
{
	if (x != undefined && y != undefined) {
		this.pos = createVector(x, y);
		this.stuck = true;
	} else {
		this.pos = randomPoint();
		this.stuck = false;
	}

	this.walk = function()
	{
		let vel = createVector(random(-1, 1), random(-0.975, 1));
		this.pos.add(vel);
		this.pos.x = constrain(this.pos.x, 0, width);
		this.pos.y = constrain(this.pos.y, 0, height);
	}

	this.checkStuck = function(others)
	{
		for (let i = 0; i < others.length; i++) {
			let d = distanceSquared(this.pos, others[i].pos);
			
			if (d < r * r * 4) {
				this.stuck = true;
				return true;
			}
		}
		
		return false;
	}

	this.show = function()
	{
		noStroke();

		if (this.stuck) {
			fill(255, 0, 100);
		} else {
			fill (255);
		}

		ellipse(this.pos.x, this.pos.y, r * 2, r * 2);
	}
}

function randomPoint()
{
	let x = random(width);
	return createVector(x, 0);
}

function distanceSquared(a, b)
{
	let dx = b.x - a.x;
	let dy = b.y - a.y;

	return (dx * dx) + (dy * dy);
}