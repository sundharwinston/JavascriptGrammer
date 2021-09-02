function volume(length) {
      return function(width) {
         return function(height) {
            return height * width * length;
        }
    }
}
console.log(volume(1)(2)(3));