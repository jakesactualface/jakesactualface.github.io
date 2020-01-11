// Population code for Coding Challenge #29
// Smart Rockets
// Written by Jake Everhart. Challenge given by Daniel Shiffman.

function Population() {
	this.rockets = [];
	this.popsize = 25;
	this.matingpool = [];

	for (let i = 0; i < this.popsize; i++) {
		this.rockets[i] = new Rocket();
	}

	this.evaluate = function () {
		let maxfit = 0;

		for (let i = 0; i < this.popsize; i++) {
			this.rockets[i].calcFitness();

			if (this.rockets[i].fitness > maxfit) {
				maxfit = this.rockets[i].fitness;
			}
		}

		for (let i = 0; i < this.popsize; i++) {
			this.rockets[i].fitness /= maxfit;
		}

		this.matingpool = [];

		for (let i = 0; i < this.popsize; i++) {
			let n = this.rockets[i].fitness * 100;

			for (let j = 0; j < n; j++) {
				this.matingpool.push(this.rockets[i]);
			}
		}
	}

	this.selection = function () {
		let newRockets = [];

		for (let i = 0; i < this.rockets.length; i++) {
			let parentA = random(this.matingpool).dna;
			let parentB = random(this.matingpool).dna;
			let child = parentA.crossover(parentB);
			child.mutation();
			newRockets[i] = new Rocket(child);
		}
		this.rockets = newRockets;
	}

	this.run = function () {
		for (let i = 0; i < this.popsize; i++) {
			this.rockets[i].update();
			this.rockets[i].show();
		}
	}
}
