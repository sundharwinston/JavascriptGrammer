window.onmousemove = function(event) {
	let w = event.pageX;
	let x = event.pageY;
	let y = event.clientX;
	let z = event.clientY;
	console.log(w,x,y,z);
}