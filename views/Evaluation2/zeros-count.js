let count = 0,j,k,range ;

if(!range )
	console.log('Please give number');
else if( typeof range === 'string' )
	console.log('string inputs are not valid..!');
else if( typeof range === 'boolean' )
	console.log('booleans are not accepted..!');
else {
	for (let i=1; i<=range; i++) {
		j = i;
		while ( j > 0 ) {
			k = j % 10;
			if (k === 0)
				count++;
			j = Math.floor(j/10);
		}
	}
	console.log(count);
}
