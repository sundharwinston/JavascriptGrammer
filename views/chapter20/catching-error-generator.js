function* generator() {
	try {
		yield 1;
		yield 2;
		yield 3;
	}
	catch(error) {
		console.log(error);
	}
}

let g = generator();

console.log(g.next());
console.log(g.next());
console.log(g.next());

g.throw(new Error('something went wrong..!'));