let count = 0,j,k,range = 50;

if(!range || typeof range === 'string' || typeof range === 'boolean')
	console.log('not valid');
else {
	for (let i=1; i<=range; i++) {
		j = i;
		while ( j > 0 ) {
			k = j % 10;
			if (k === 0)
				count++;
			j = j/10;
		}
	}
	console.log(count);
}