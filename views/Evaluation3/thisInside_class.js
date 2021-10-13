class Rectangle {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // calculate = function(){
  //   // this.name = 20;
  //   return this.name * this.age;
  // }
  calculate = () => {
  	console.log(this.name);
  }
}
const square = new Rectangle("javascript", 10);
console.log(square.calculate()); // 100



// var object = {
// 	name : "winston",

// 	data : function() {
// 		console.log(this.name);
// 	}
// }

// object.data();