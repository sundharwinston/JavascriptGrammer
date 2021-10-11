var name = "Javascript";
var object = {
	arrow : () => {
 		// this.name = "check",
		console.log(this.name);
	},
}


// let object = new User();
console.log(object.arrow());