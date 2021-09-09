function volume(length) {
      return function(width) {
         return function(height) {
            return height * width * length;
        }
    }
}
console.log(volume(1)(2)(3));



// Achieve currying using bind method
function volumeBind (length,width,height) {
	console.log(height * width * length);
}

let result = volumeBind.bind(this,1,2);
console.log(result(3));
