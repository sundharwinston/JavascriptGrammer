const firstArray = [1,2,3,4,5,7], secondArray = [4,5,6,7,8,9,10];
let smallLength,greaterLength,i,j;

if (firstArray.length > secondArray.length) {
    greaterLength =  firstArray.length;  
    smallLength =  secondArray.length; 
}else {
	greaterLength = secondArray.length; 
    smallLength = firstArray.length;  
}
for ( i = 0; i < greaterLength; i++) {
    for ( j=0; j < smallLength; j++) {
        if (firstArray[i] === secondArray[j])
            console.log(secondArray[j]);
     }
 }
