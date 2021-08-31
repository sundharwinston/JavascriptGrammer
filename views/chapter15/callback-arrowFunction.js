let result = () => {
	console.log("I'm arrow function");
}
setTimeout(result,1000);



//event based callback function
let event = (event) => {
	console.log("I'm arrow function");
}
document.addEventListener('mouseover',event);