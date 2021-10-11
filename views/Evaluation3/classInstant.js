// ================================================================================
// Instance classes
// ================================================================================

class instanceClass {
	name = "sundhar";
	getDetail = function() {
		console.log(`classic function`);
	}
}

let object = new instanceClass();
console.log(object.getDetail());


// ================================================================================
// static classes
// ================================================================================

class staticClass {
	name = "sundhar";
	static getDetail = function() {
		console.log(`static function`);
	}
}

// let objects = new staticClass();
console.log(staticClass.getDetail());
