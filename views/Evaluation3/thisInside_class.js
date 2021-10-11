class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea = function(){
    // this.height = 20;
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.calcArea()); // 100