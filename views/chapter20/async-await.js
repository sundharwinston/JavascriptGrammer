async function checkFunction() {
	let myPromise = new Promise(function(myResolve, myReject) {
		setTimeout(function() {
	 		myResolve("I love Javascript !!"); 
	 	}, 3000);
  	});
   console.log(await myPromise);
}

checkFunction();


// another example of await
async function check() {
	let x =  Promise.resolve(1);
	console.log(await x);

}
check();




// another example of await
// check with await and without await see the output changes
async function a() {
	await Math.sqrt(4);
	console.log("first");
}

function b() {
	console.log("second");
}
a();
b();