
function obj() {
	let arr = Array(1000);
	for(let i=0; i<arr.length; i++) {
	    arr[i] = new Object();
	}
}

console.time();
	obj();
console.timeEnd(); 