class lang {
	constructor (name,year) {						// need constructor in class
		this.name = name;
		this.year = year;
	}
	check() {
		console.log(`Hi I am ${this.name} my invention is ${this.year}`);
	}
}
let programming = new lang("Javascript",1995);
programming.check();