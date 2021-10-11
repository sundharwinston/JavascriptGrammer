function check() {
	console.log("classic function");
	console.log(this);
}
document.addEventListener('onChange',check());


let ArrowFunctioncheck = () => {
	console.log("Arrow function");
	console.log(this);
}

document.addEventListener('onChange',ArrowFunctioncheck());
