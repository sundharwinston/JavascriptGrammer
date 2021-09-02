function map(array) {										// working logics of map function
	let copy =[];
	for(let index = 0; index < array.length; index++){
		let original = array[index];
		let modified = original+1;				//return original+!
		copy[index] = modified;
	}
	console.log(copy);
	console.log(array);
}
map([1,2,3])