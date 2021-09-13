'use strict';

let start =1,end = 200;

if(!start || !end)
	console.log('give start and end values');
else if(start > end ) 
	console.log('end value must be greater than start');
else if(typeof start === 'string' || typeof end === 'string')
	console.log('string value not accepted..!');
else if(typeof start  === 'boolean' || typeof end === 'boolean') 
	console.log('boolean values not accepted..!');
else {
		for (let i = start; i <= end; i++){
				let flag = 0;
				for (let j = 1; j<=i; j++){
					if(i % j ===0) flag++;
				}
				if(flag === 2) 
					console.log(i)
		}
}
