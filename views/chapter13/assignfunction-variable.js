var check = function(){
	console.log("im anonymous");
}
check();

setTimeout(check,1000);
document.addEventListener('click',check);