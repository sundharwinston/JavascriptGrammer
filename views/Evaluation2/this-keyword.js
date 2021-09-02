// strict mode
'use strict';
function check() {		// check the behaviour of this in strict mode
	return this;
}
check();


// non strict mode
var data = 3;
console.log( this === window );
// console.log(window.data);
this.lang = "javascript";							// tha lang variable is set to global
this.data = "javascript";							// change the data value using this keyword
console.log(window.lang); 							// this and window is same both in globalized form
console.log(lang); 
console.log(data); 