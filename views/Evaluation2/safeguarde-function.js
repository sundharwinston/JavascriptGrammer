function check() {
	    return 'Hi'
}
function lang(user, functionName) {
	if(typeof functionName === 'function'){
    	const message = functionName(); 
    	console.log(`${message} ${user}`);				// print the data using template literal
    } 
    else {
    	console.log('give function');
    }
}
lang('Javascript', check);								// function invocation