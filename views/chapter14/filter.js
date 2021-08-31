array = [1,2,3,4];

var result = [];
array.filter((data,index) => {
	 result[index] = data+1;
});
console.log(result);
console.log(array);
