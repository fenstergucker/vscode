class Animal {
	constructor(name) {
		this.name = name
	}

	makeSound() {
		console.log("I make some noise!")
	}

}

const donald = new Animal("donlad");
donald.makeSound();
