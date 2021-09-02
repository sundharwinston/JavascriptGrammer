'use strict';

let i,j,range = 200;

Loop1:	for ( i = 2; i <= range; i++){
			let flag = 0;
			for ( j = 1; j<=i; j++){
				if(i % j ===0) flag++;
			}
			if(flag === 2) 
				console.log(i)
			else
				continue Loop1;
		}
