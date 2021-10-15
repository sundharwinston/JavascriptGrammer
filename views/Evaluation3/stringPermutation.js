"use strict";
function permutation(string) {
  if (!string || typeof string !== "string"){
    return "Please enter a string";
  } else if (string.length < 2 ){
    return string;
  }

  var permutations = []; 
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 
    let result = permutation(remainingString);
    console.log(result);
    for (var subPermutation of result)
      permutations.push(char + subPermutation)
  }
  return permutations;
}
console.log(permutation("abc"));              // function invoked


