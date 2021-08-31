function check(argument) {
	return argument+1;
}
var array = [1,2,3,4];

let result = array.map(check);		// using map method call the function recursively (callback function)

console.log(result);				// result : [2,3,4,5]
console.log(array);					// original array	[1,2,3,4] does not affect