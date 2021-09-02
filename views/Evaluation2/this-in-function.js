var obj = {name: 'Javascript'};
var name = 'Java';
function go() {
	 console.log(this.name);  
}
go();          
go.call(obj);  							// call() method takes arguments separately 
go.apply(obj);  						// apply() accepts a single array of arguments