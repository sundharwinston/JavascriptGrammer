'use strict';

let i,j,start =1,end = 200;

if(!start || !end || start > end || typeof start === 'string' || typeof end === 'string' || typeof start  === 'boolean' || typeof end === 'boolean')
	console.log('not valid');
else {
	Loop1:	for ( i = start; i <= end; i++){
				let flag = 0;
				for ( j = 1; j<=i; j++){
					if(i % j ===0) flag++;
				}
				if(flag === 2) 
					console.log(i)
				else
					continue Loop1;
			}
}
