## 1. Display prime numbers 1 to 200?

## Algorithm :

step 1: start the program.

step 2: declare a variable i and j.

step 3: declare for loop with initialize variable i = 0 , condition i<=200 and i incremented by one.

step 3.1: declare variable flag with initial value of zero.

step 3.2: declare nested for loop with initialize variable j=1, condition j <=i and j incremented by one.

step 3.2.1: check if condition i % j === 0. If the condition is true then increment flag value by one. else go to step 3.2

step 3.3: check if condition flag === 2 if the condition is true then print value of i else go to step 3.

step 4: stop the program.

## Pseudocode :

	DECLARE VARIABLE i,j
	For ( i = 2; i <= 200; i++)
		let flag = 0;
			FOR ( j = 1; j<=i; j++)
				if(i % j ===0) flag++;
			flag === 2 ? PRINT i : ""
			

Source Code : 👉


## 2. From two sorted arrays, how would you find the common numbers?

## Algorithm :

step 1: start the program.

step 2: declare a two variable s_length and h_length for storing length of the array.

step 3: check first array.length > second array.length if the condition is true then store greater length and smaller length.

step 4: declare for loop with initialize variable i = 0 , condition i<= greater length and i incremented by one.

step 4.1: declare nested for loop with initialize variable j=0, condition j < smaller length of an array and j incremented by one.

step 4.1.1: check if condition first array[i] == second array[j]. If the condition is true then print second array value.

step 5: stop the program.


## Pseudocode :

		DECLARE firstArray = [1,2,3,4,5,6], secondArray = [4,5,6,7];
        DECLARE smallLength,greaterLength,i,j;
        IF (firstArray.length > secondArray.length) 
            greaterLength =  firstArray.length;  
            smallLength =  secondArray.length;  
        FOR ( i = 0; i < greaterLength; i++)
            FOR ( j=0; j < smallLength; j++) 
                IF (firstArray[i] == secondArray[j])
                    PRINT secondArray[j];

Source Code : 👉

## 3.Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example?

`Function Anatomy :`

- The function having function keyword and followed by function name with or without parameter. The function block is enclosed with brackets {}.

`Anonymous function :`

- If The function name is omitted then the function is called as Anonymous function.
- we assign the function to the variable. we need to call the anonymous function for that purpose the anonymous function has to be stored into a variable. 
	
		function (parameter){
			//f unction body
		}
		// Arrow function 
		() => {
			// function body
		}

Source Code : 👉

`Assigning function to a variable :`

Anonymous functions can be assigned to a variable. If you assigned a anonymous function to a variable then it is also called as named function and you can call the function using their variable for example.

	var variable = function (parameter){
			// function body
		}
	variable();											// function invocation
	var variable = () =>{								// Arrow Function
		// function body
	}
	variable();

Source Code : 👉

## 4. Show an example of Safeguarding function parameters?

To safeguard the value by checking its type. JavaScript has a built-in directive typeof that we can use before calling the function.

Source Code : 👉

## 5. Explain `this` keyword with an example?

- The JavaScript `this` keyword refers to the object it belongs to.

- A `this` keyword refers to the Global object. It also has some differences between strict mode and non-strict mode.

Source Code : 👉

## 6. How `this` inside the function and class?

- the `this` keyword action is more or less similiar to functions and classes.


`In Function :`

- The value of this is dependent on how the function is called.
- first of all the `this` keyword inside function isn't set, so it defaults to the global/window object.
- If we pass any parameter or object to the function then only the `this` is set to object or value.

Source Code : 👉

## 7. Difference between map, reduce and filter methods? With an example

`map :`
- The map() method calls the provided function once for each element in an array.
- map() does not change the original array.

		Syntax :
		map((element, index, array) => { ... } )

`reduce :`
- The reduce() method applies a reducer function to each array element and returns a single value.

`filter :`

Source Code : 👉

## 8. Count Total number of zeros from 1 up to 50

## Algorithm :

step 1: start the program.

step 2: declare a variable count,i,j and k.

step 3: declare for loop with initialize variable i = 1 , condition i <= 50 and i incremented by one.

step 3.1: Assign i value to variable j.

step 3.2: declare while loop with condition of j.

step 3.2.1: calculate remainder of the number and stored in variable k.

step 3.2.2: check if condition of k === 0. If the condition is true then increase count by one.

step 3.2.3: divide j by 10 and store to variable j and go to step 3.2.

step 3.3: print count.

step 4: stop the program.


## Pseudocode :

	DECLARE count = 0,i,j,k
	FOR (i=1; i<=50; i++)
		j = i;
		WHILE ( j )
			k = j % 10;
			IF (k === 0)
				count++;
			j = j/10;
	PRINT count;

Source Code : 👉

## 9. The following array of numbers show the missing number? ([1,2,3,5,6])

## Algorithm :

## Pseudocode :


Source Code : 👉

## 10. Write a program for calculating age using Date of birth? (1990)

## Algorithm :

step 1: start the program.

step 2: declare a variable date,year and age.

step 3: get the date using date object and stored in variable date.

step 4: get the current year and stored in variable year.

step 5: subtract the current year and birth year and stored in variable age.

step 6: print the age.

step 7: stop the program.

## Pseudocode :

	DECLARE date,year,birthYear and age
	date = new Date();
	year = date.getFullYear();
	age = year- birthYear;
	PRINT AGE

Source Code : 👉


## 11. In the Javascript function, what are the differences between call by value and reference?

`In pass by value :`

the value of the variable is directly passed into the function argument. If any changes happen inside the function then it does not affect the original value.


## Algorithm :

step 1: start the program.

step 2: declare a two variable.

step 3: declare a function with two parameter..

step 3.1: assign a new value to both the variable and print the variable insidie a function. The value get changed.

step 4: call the function i.e function invocation.

step 5: print the both variable. It could not be changed followed by inside the function statements.

step 6: stop the program.

## Pseudocode :

	let first_var = 1,second_var = 2;
	FUNCTION callByValue(first_var,second_var) 
		first_var = 100; 
		second_var = 200; 
		PRINT (first_var,second_var);
	PRINT (first_var,second_var);
	callByValue(first_var,second_var); 
	PRINT (first_var,second_var);

Source Code : 👉

`In pass by reference :`

In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes happens in any of the parameter it affect the original value.

## Algorithm :

step 1: start the program.

step 2: declare a variable with initialize value of an object.

step 3: declare a function with parameter.

step 3.1: change the values in object property and print the object. the original object get changed.

step 4: call the function i.e function invocation.

step 5: print the object. It is also changed because already the original object gets changed.

step 6: stop the program.

## Pseudocode :

	var varObj = {a:1,b:10};
	function callByReference(varObj)  
		varObj.a = 100; 
		PRINT (varObj); 
	PRINT (varObj);
	callByReference(varObj) 
	PRINT (varObj);

Source Code : 👉

## 12. What is Arity in Javascript? Explain with a real time example.

- Arity gives the number of arguments in a function takes.
- You can access function’s arity via Function.length property.

Source Code : 👉

## 13. What is Currying in Javascript? Explain with a real time example.

Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

## Algorithm :

step 1: start the program.

step 2: declare a nested function wiith parameter.

step 3: return every nested function and final end function return a value.

step 4: call the function with passing value.

step 5: print the return value.

step 6: stop the program.

## Pseudocode :

	FUNCTION volume(length) {
      RETURN function(width) {
         RETURN function(height) {
            RETURN height * width * length;
	PRINT volume(11)(2)(3));

Source Code : 👉

## 14. What is ES6?

- ES6 refers to version 6 of the ECMA Script programming language. It is a major enhancement to the JavaScript language, and adds many more features intended to make large-scale software development easier.
- which is better supported on most browsers.

## 15. What is an anonymous function? Where do we use it? Why do we need it?

`Anonymous function :`

If The function name is omitted then the function is called as Anonymous function. for example.

## 16. List the differences between named function and assigning functions to variable with
examples

`named function :`

- The function having function keyword and followed by function name with or without parameter. The function block is enclosed with brackets {}.


`Assigning functions to variable :`

- Anonymous functions can be assigned to a variable. If you assigned a anonymous function to a variable then it is also called as named function and you can call the function using that variable with parentheses.


