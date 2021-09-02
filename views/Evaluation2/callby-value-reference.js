// Call by value
let first = 1,second = 2;
function callByValue(first,second) {
	first_var = 100; 
	second_var = 200; 
	console.log(first_var,second_var);						// print the changed value 
}
console.log("Before call :" + first,second);
callByValue(first,second); 									// function invocation
console.log("After call :" + first,second);




// Call by reference
var varObj = {a:1,b:10};
function callByReference(varObj) {
	varObj.a = 100; 
	console.log(varObj); 									// print the changed object
}
console.log("Before Call :",varObj);							
callByReference(varObj) 									// function invocation
console.log("After call :" , varObj);						// print the changed object. because the original get changed