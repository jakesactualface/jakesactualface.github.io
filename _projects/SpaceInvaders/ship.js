// Ship object code for Coding challenge #5
// Written by Jake Everhart

function Ship() {
	this.x = width / 2;
	this.speed = 5;
	this.xdir = 0;

	this.show = function () {
		fill(255);
		rectMode(CENTER);
		rect(this.x, height - 20, 20, 60);

		if (this.x < 0 || this.x > width) {
			this.x = (width + this.x) % width;
		}
	}

	this.setDir = function (dir) {
		this.xdir = dir;
	}

	this.move = function (dir) {
		this.x += this.xdir * this.speed;
	}
}