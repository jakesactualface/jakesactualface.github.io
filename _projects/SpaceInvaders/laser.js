// Laser object code for Coding challenge #5
// Written by Jake Everhart

function Laser(x, y) {
	this.x = x;
	this.y = y;
	this.r = 3;
	this.color = color(0, 200, 0);
	this.speed = 8;
	this.toDelete = false;

	this.show = function () {
		noStroke();
		fill(this.color);
		ellipse(this.x, this.y, this.r, this.r * 3);
	}

	// process collision event of a laser
	this.hits = function (invader) {
		let d = dist(this.x, this.y, invader.x, invader.y)

		if (d < (this.r * 2 + invader.r)) {
			// remove laser from game after hit
			this.toDelete = true;
			return true;
		}
		else {
			return false;
		}
	}

	this.move = function () {
		this.y = this.y - this.speed;

		// mark laser for deletion after leaving the screen
		if (this.y < 0) {
			this.toDelete = true;
		}
	}
}