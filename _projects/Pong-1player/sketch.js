// 1-player version of Pong game
// Created for instruction purposes at MLP's Intro to Javascript session
// Written by Jake Everhart

const margin = 30;
let p1, p2;
const paddleSpeed = 10;
const ballSpeed = 5;
let ball;
let s1, s2;

function setup() {
	let canvas = createCanvas(windowWidth * 0.4, windowHeight * 0.6);
  canvas.parent("project-view");

	p1 = new PaddleBot(margin);
	p2 = new Paddle(width - margin, UP_ARROW, DOWN_ARROW);
	
	let dir = createVector(random([-1, 1]), random(-1, 1));
	ball = new Ball(width/2, height/2, dir);
	
	s1 = s2 = 0;
} 

function draw() { 
	background(30, 100, 30);
	line(width/2, 0, width/2, height);
	textSize(32);
	fill(255);
	text(s1, margin * 2, margin);
	text(s2, width - (margin * 2), margin);
	
	p1.show();
	p1.update();
	p2.show();
	p2.update();
	
	ball.show();
	ball.update();
		
	if (ball.pos.x < 0)
	{
		s2++;
		BallReset(-1);
	}
	else if (ball.pos.x > width)
	{
		s1++;
		BallReset(1);
	}
}

function BallReset(x)
{
	let dir = createVector(x, random(-1, 1));
	ball = new Ball(width/2, height/2, dir);
}

function Ball(x, y, dir)
{
	this.pos = createVector(x, y);
	this.dir = dir;
	this.w = 5;
	
	this.show = function()
	{
		translate(this.pos.x, this.pos.y);
		rect(-this.w/2, -this.w/2, this.w, this.w);
		resetMatrix();
	}
	
	this.update = function()
	{
		this.dir.normalize();
		this.pos.add(this.dir.mult(ballSpeed));
		
		if (this.pos.y > height || this.pos.y < 0)
		{
			this.dir.y *= -1;
		}
		
		if (this.collide(p1))
		{
			this.dir.x *= -1;
			this.dir.add(createVector(this.pos.x - p1.x, this.pos.y - p1.y).normalize());
		}
		else if (this.collide(p2))
		{
			this.dir.x *= -1;
			this.dir.add(createVector(this.pos.x - p2.x, this.pos.y - p2.y).normalize());
		}
	}
	
	this.collide = function(paddle)
	{
		if (this.pos.x > (paddle.x - paddle.w/2) && this.pos.x < (paddle.x + paddle.w/2) &&
				this.pos.y > (paddle.y - paddle.h/2) && this.pos.y < (paddle.y + paddle.h/2))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

function PaddleBot(x)
{
	this.x = x;
	this.y = height / 2;
	this.w = 10;
	this.h = windowHeight / 10;
	this.speed = paddleSpeed;

	this.show = function()
	{
		translate(this.x, this.y);
		rect(-this.w/2, -this.h/2, this.w, this.h);
		resetMatrix();
	}
	
	this.update = function()
	{
		if (this.y - this.h/2 > 0 && ball.pos.y + ballSpeed < this.y)
		{
			this.y -= this.speed/4;
		}
		else if (this.y + this.h/2 < height && ball.pos.y - ballSpeed > this.y)
		{
			this.y += this.speed/4;
		}
	}
}

function Paddle(x, upButton, downButton)
{
	this.x = x;
	this.y = height / 2;
	this.w = 10;
	this.h = windowHeight / 10;
	this.speed = paddleSpeed;
	this.upButton = upButton;
	this.downButton = downButton
	
	this.show = function()
	{
		translate(this.x, this.y);
		rect(-this.w/2, -this.h/2, this.w, this.h);
		resetMatrix();
	}
	
	this.update = function()
	{
		if ( this.y - this.h/2 > 0 && keyIsDown(this.upButton))
		{
			this.y -= this.speed;
		}
		else if (this.y + this.h/2 < height && keyIsDown(this.downButton))
		{
			this.y += this.speed;
		}
	}
}