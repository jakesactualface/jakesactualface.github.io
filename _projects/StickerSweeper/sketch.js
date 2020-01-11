// StickerSweeper
// Written by Jake Everhart, challenge given by Daniel Shiffman

let cols = 0;
let rows = 0;
let wide = 50;
let gap = 10;
let numStickers = 10;
let gameOver = false;
let grid;
let remaining;

function setup() {
	createCanvas(500, 500);

	gameOver = false;
	cols = floor(width / wide);
	rows = floor(height / wide);

	// initially, all cells remain in the game
	remaining = cols * rows;

	// create grid
	grid = new Array(cols);
	for (let i = 0; i < grid.length; i++) {
		grid[i] = new Array(rows);
	}

	let places = [];

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i, j, wide);
			places.push({
				i,
				j
			});
		}
	}

	// distribute stickers
	shuffle(places, true);

	for (let num = 0; num < numStickers; num++) {
		let choice = places.pop();

		grid[choice.i][choice.j].sticker = true;
	}

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j].tallyNeighbors();
		}
	}
}

function draw() {
	background(220);

	// end game if only cells remaining are stickers
	if (remaining <= numStickers) {
		endGame();
	}

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}
}

// reveals all cells
function endGame() {
	gameOver = true;

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j].reveal();
		}
	}
}

function mousePressed() {
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			if (grid[i][j].checkClicked(mouseX, mouseY)) {
				grid[i][j].reveal();
			}
		}
	}

	// resets game if game has ended
	if (gameOver) {
		setup();
	}
}

class Cell {
	constructor(i, j, wid) {
		this.i = i;
		this.j = j;
		this.width = wid;
		this.x = this.i * this.width;
		this.y = this.j * this.width;
		this.sticker = false;
		this.revealed = false;
		this.surroundingStickers = 0;
	}

	// member function checks sticker property of neighbors
	tallyNeighbors() {
		if (this.sticker) {
			this.surroundingStickers = -1;
		} else {
			for (let i = -1; i <= 1; i++) {
				for (let j = -1; j <= 1; j++) {
					let col = this.i + i;
					let row = this.j + j;
					if (col >= 0 && row >= 0 && col < cols && row < rows) {
						if (grid[col][row].sticker) {
							this.surroundingStickers++;
						}
					}
				}
			}
		}
	}

	show() {
		stroke(0);

		if (this.revealed) {
			fill(200);
			rect(this.x, this.y, this.width - 1, this.width - 1);
			if (this.sticker) {
				// draw sticker
				fill(0);
				triangle(this.x + gap / 2, this.y + this.width - gap,
					this.x + this.width / 2, this.y,
					this.x - gap / 2 + this.width, this.y + this.width - gap);
				triangle(this.x + gap / 2, this.y + gap,
					this.x + this.width / 2, this.y + this.width,
					this.x + this.width - gap / 2, this.y + gap);
			} else {
				// display number of neighboring stickers
				if (this.surroundingStickers > 0) {
					textSize(wide);
					fill(0);
					text(this.surroundingStickers, this.x + gap, this.y + this.width - gap / 2);
				}
			}
		} else {
			noFill();
			rect(this.x, this.y, this.width - 1, this.width - 1);
		}
	}

	// triggered on reveal of empty cell
	// reveals this cell, and all neighboring cells
	// chain reaction on reveal of other empty cells
	floodFill() {
		this.revealed = true;

		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				let col = this.i + i;
				let row = this.j + j;
				if (col >= 0 && row >= 0 && col < cols && row < rows) {
					if (!grid[col][row].revealed) {
						grid[col][row].reveal();

						if (grid[col][row].surroundingStickers === 0) {
							grid[col][row].floodFill();
						}
					}
				}
			}
		}
	}

	reveal() {
		this.revealed = true;
		remaining--;

		if (this.surroundingStickers === 0) {
			this.floodFill();
		}
	}

	checkClicked(x, y) {
		let returnState = false;

		if (x > this.x && x < this.x + this.width &&
			y > this.y && y < this.y + this.width) {
			returnState = true;

			if (this.sticker) {
				endGame();
			}
		}

		return returnState;
	}
}