const array = [1,2,6];
let first = array[0];
let last = array[array.length-1];
let empty = [];
let j=0

for(let i=first; i<=last ;i++) {
	empty[j] = i;
	j++;
}

let spread = [...array,...empty];
let result =  spread.filter(number => {
  return !(array.includes(number) && empty.includes(number));
})

console.log(result);

var data = [];let k = 0;
for(let i = 0;i < spread.length;i++){
	if(!(array.includes(spread[i]) && empty.includes(spread[i]))){
		data[k] = spread[i];
    k++;
	}
}
console.log(data);
