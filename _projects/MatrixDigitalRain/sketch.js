// Coding challenge supplied by The Coding Train (Daniel Shiffman and Emily Xie)
// Code for Matrix Digital Rain sketch.js
// Written by Jake Everhart

const symbolSize = 15;
const fadeInterval = 1.6;
let streams = [];

function setup() {
	background(0);
	createCanvas (window.innerWidth, window.innerHeight);
	let x = 0;
	for (let i = 0; i <= width / symbolSize; i++) {
		let stream = new Stream();
		stream.generateSymbols(x, random(-1000, 0));
		streams.push(stream);
		x += symbolSize;
	}
	textFont('Consolas');
	textSize(symbolSize);
}

function draw() {
	background(0, 150);
	streams.forEach(function(streams) {
		streams.render();
	});
}

function Symbol(x, y, speed, first, opacity) {
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2, 20));
	this.first = first;
	this.opacity = opacity;

	this.rain = function() {
		this.y = (this.y >= height) ? 0 : this.y += this.speed;
	}

	this.setToRandomSymbol = function() {
		if (frameCount % this.switchInterval == 0) {
			this.value = String.fromCharCode(0x30A0 + round(random(0, 95)));
		}
	}
}

function Stream() {
	this.symbols = [];
	this.totalSymbols = round(random(5, 30));
	this.speed = random(5, 15);

	this.generateSymbols = function(x, y) {
		let first = round(random(0, 4)) == 1;
		let opacity = 255;
		for (let i = 0; i <= this.totalSymbols; i++) {
			symbol = new Symbol(x, y, this.speed, first, opacity);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			opacity -= (255 / this.totalSymbols) / fadeInterval;
			y -= symbolSize;
			first = false;
		}
	}

	this.render = function() {
		this.symbols.forEach(function(symbol) {
			if (symbol.first) {
				fill(180, 255, 180, symbol.opacity);
			} else {
				fill(0, 255, 70, symbol.opacity);
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
		});
	}
}