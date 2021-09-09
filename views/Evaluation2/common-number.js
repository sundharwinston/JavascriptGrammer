const firstArray = [1,2,3,4,5], secondArray = [4,5,6,7,8,9,10];
let smallLength,greaterLength,i,j;


for ( i = 0; i < firstArray.length; i++) {
    for ( j=0; j < secondArray.length; j++) {
        if (firstArray[i] === secondArray[j])
            console.log(secondArray[j]);
     }
 }




// Using Higher order function
var filteredArray = firstArray.filter(function(n) {
    return secondArray.indexOf(n) !== -1;
});
console.log(filteredArray);
