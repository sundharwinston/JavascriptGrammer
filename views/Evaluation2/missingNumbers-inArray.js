const array = [1,3,5];
let first = array[0];
for(let i=0;i<array.length;i++){
	if(array[i] != first){
		console.log(first);
	}
	first++;
}