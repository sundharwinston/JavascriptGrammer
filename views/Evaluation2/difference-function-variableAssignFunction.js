// Default function with name
check();
	function check() {
		console.log("Hi");				// print "Hi"
	}


// Assigning function to variable
check();
	var check = function() {
		console.log("Hi");				// Error : check is not a function
	}