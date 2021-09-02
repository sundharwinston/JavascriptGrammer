let array = [10,20,30];
let result = array.reduce((acc,value) => {		// accumulator is store the data & value is iterating valur i.e current value
	return acc + value;
})
console.log(result);