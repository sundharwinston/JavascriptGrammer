// var name = "Javascript";
// var object = {
// 	arrow : () => {
//  		this.name = "check",
// 		console.log(this.name);
// 	},
// 	// arrow : function() {
// 	// 	console.log(this.name);
// 	// }
// }


// // let object = new User();
// console.log(object.arrow());

// ==============================================================
// Another Example
// ==============================================================

var john = {
	    name: 'John',
	    greet: function(people) {
	      // const that = this;
	        people.forEach(function (person) {
	            console.log('Hi ' + person + '. My name is ' + this.name);
	        });
	    }
	}
	john.greet(['javascript', 'react', 'Angular']); 