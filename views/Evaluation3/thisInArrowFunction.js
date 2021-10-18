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
	    name1: 'John',
	    greet : () =>  {
	    	this.name = "sundhar";
			    
	}
}

let man = {
	    name2: 'John',
	    greet1 : () =>  {
	    	this.name = "sundhar1";
			this.age = 10;	
      		console.log(this);
	        // people.forEach(function (person) {
	        //     console.log('Hi ' + person + '. My name is ' + that.name);
	        // });
	    }

}

let call = man.greet1.bind(john); 
call();


// ===================================================
// Another example
// ======================================================

//Refer : https://stackoverflow.com/questions/33308121/can-you-bind-this-in-an-arrow-function

let human = {
	hey : () => {	
	 console.log(this);						// its refer window object
   }
 
 }
 const you = {
   a : 1,
   b:2,
 };
 
 let check = human.hey.bind(you);
 check();


// ==================================================================


