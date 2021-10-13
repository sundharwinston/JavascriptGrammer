function check() {
	console.log("classic function");
	console.log(this);					// refers target elementss
}
document.addEventListener('onChange',check());


let ArrowFunctioncheck = () => {
	console.log("Arrow function");
	console.log(this);					// refers window objects/elements
}

document.addEventListener('onChange',ArrowFunctioncheck());


// ======================================================================
// Another Method
// ======================================================================

