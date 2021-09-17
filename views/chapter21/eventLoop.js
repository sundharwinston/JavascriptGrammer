console.log("start");
setTimeout(function(cb){
  console.log("call back");
},5000);
console.log("end");


// Another Example
console.log("start");
document.getElementById('id').addEventListener("click", function cb(){
  console.log("call back");
})

console.log("end");