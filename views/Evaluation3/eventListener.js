let x = 5;
const startEvent = new Event("start");
 
document.addEventListener('start', functionCheck);

function functionCheck() {
	console.log("listening event");
}
 
if(x == 5){
  document.dispatchEvent(startEvent);
}