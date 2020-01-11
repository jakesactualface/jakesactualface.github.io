// Snake object code for Coding Challenge #3
// Written by Jake Everhart

function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.dir = function (x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	// check whether given direction matches snake's heading
	this.checkDir = function (x, y) {
		if ((this.xspeed === x) && (this.yspeed === y)) {
			return true;
		}
		else {
			return false;
		}
	}

	// attempt to eat a food item at given coordinates (pos)
	this.eat = function (pos) {
		let d = dist(this.x, this.y, pos.x, pos.y)
		if (d < 1) {
			this.total++;
			return true;
		}
		else {
			return false;
		}
	}

	// kill snake if collision with tail occurs
	this.death = function () {
		for (let i = 0; i < this.tail.length; i++) {
			let pos = this.tail[i];
			let d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				total = 0;
				this.tail = [];
			}
		}
	}

	this.update = function () {
		if (this.total === this.tail.length) {
			for (let i = 0; i < this.tail.length - 1; i++) {
				this.tail[i] = this.tail[i + 1];
			}
		}
		this.tail[this.total - 1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed * scale;
		this.y = this.y + this.yspeed * scale;

		this.x = constrain(this.x, 0, width - scale);
		this.y = constrain(this.y, 0, height - scale);
	}

	this.show = function () {
		fill(255);
		for (let i = 0; i < this.total; i++) {
			rect(this.tail[i].x, this.tail[i].y, scale, scale)
		}

		fill(255);
		rect(this.x, this.y, scale, scale)
	}
}