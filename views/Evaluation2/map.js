let array = [1, 4, 9, 16];
let result = array.map(x => x + 1);
console.log(result);


let obj = [{name:"javascript",year: 5},{name:"java",year: 4}];
var sum=0;
obj.map((data) => {
	return sum += data.year;
})
console.log(sum);