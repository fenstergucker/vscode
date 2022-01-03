function Person(forename, name) {
	// properties
	this.forename = forename;
	this.name = name;
	// Association
	// this.parent = null;

	//Composition
	/*
    address: {
		street: "Salzburgerstraße 11",
		city: "Attang-Puchheim"
	}
	*/

	// methods
	this.displayFullName = function() {
		return this.forename + " " + this.name;
	}
}

/*
class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
}

class Developer extends Person {
	constructor(name, surname, knownLanguage) {
		super(name, surname);
		this. knownLanguage = knownLanguage;
	}

	displayCompetency() {
		console.log(super.getFullName() + " knows " + this.knownLanguage);
	}
}
*/

let fritzSeitz = new Person("Fritz", "Seitz");
let lisaSeitz = new Person("Lisa", "Seitz");

//lisaSeitz.parent = johnSmith;
