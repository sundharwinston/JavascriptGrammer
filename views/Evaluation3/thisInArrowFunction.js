// this.name = "Javascript";
// var object = {
// 	arrow : () => {
//  		// this.name = "check",
// 		console.log(this.name);
// 	},
// 	// arrow : function() {
// 	// 	console.log(this.name);
// 	// }
// }

// console.log(object.arrow());

// ==============================================================
// Another Example
// ==============================================================

let john = {
	    name: 'John',
	    greet : () =>  {
	    	this.name = "sundhar";
      		console.log(this.name);
	        // people.forEach(function (person) {
	        //     console.log('Hi ' + person + '. My name is ' + that.name);
	        // });
	    }

}
let call = john.greet.bind(john); 
call();


// ==================================================================


