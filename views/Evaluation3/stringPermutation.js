 function permutation(string) {
   if (string.length < 2 ) {
    console.log(string);
    return string;
  }

  var permutations = []; 
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 

    for (var subPermutation of permutation(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}
console.log(permutation("abac")); 
