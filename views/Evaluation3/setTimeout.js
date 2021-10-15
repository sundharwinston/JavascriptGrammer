// for(var i = 0; i < 10; i++) {
// 	setTimeout(function(a) {
// 		console.log(a);
// 	}.bind(1),10);

// }


// ------------------------------------------------------------
// object bind
// ---------------------------------------------------------------

const object = {
	name : "javascript",
	getName : function() {
		console.log(this.name);
	}

}

let data = object.getName.bind(object);
data();