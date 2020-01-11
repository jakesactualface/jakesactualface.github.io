// Invader object code for Coding challenge #5
// Written by Jake Everhart

function Invader(x, y) {
	this.x = x;
	this.y = y;
	this.r = 20;
	this.color = color(255, 200, 0);
	this.xdir = 50;
	this.toDelete = false;

	// process death event of invader
	this.death = function () {
		this.toDelete = true;
	}

	// xdir property is used as speed
	this.move = function () {
		this.x += this.xdir;
	}

	// move forward one row, and reverse x-direction
	this.shiftDown = function () {
		this.xdir *= -1;
		this.x += this.xdir;
		this.y += this.r;
	}

	this.show = function () {
		noStroke();
		fill(this.color);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
}