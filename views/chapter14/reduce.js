array = [1,2,3,4];

let result = array.reduce((acc,value) => {		// reduce method return only one value. Because accumulator is not an array
	return acc+value;
})
console.log(result);