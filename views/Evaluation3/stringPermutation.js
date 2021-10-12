// function permutation(string) {
//   if (!string || typeof string !== "string"){
//     return "Please enter a string";
//   } else if (string.length < 2 ){
//     return string;
//   }

//   var permutations = []; 
//   for (var i = 0; i < string.length; i++) {
//     var char = string[i];


//     if (string.indexOf(char) != i) 
//       continue; 

//     var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 

//     for (var subPermutation of permutation(remainingString))
//       permutations.push(char + subPermutation)
//   }
//   return permutations;
// }
// console.log(permutation("abc"));



// // =====================================================================================
// // Another Method
// // =====================================================================================
"use strict";
  let string = "abc"
  function permutation( string, result){
      if(string.length === 0){
          count++;
          console.log(result);
      }else{
          for(let i = 0; i < string.length ; i++ ){
              let remain = string.slice( 0, i) + string.slice( i + 1 );
              permutation( remain, result + string[i]);
          }
      }
  }
  if(typeof string === "string"){
      if(string.length > 0){
          var count = 0;
          permutation( string, "");
          console.log("Total number of permutation are :",count);
      }else{
          console.log("This is empty string");
      }
  }else{
      console.log("This is not string")
  } 