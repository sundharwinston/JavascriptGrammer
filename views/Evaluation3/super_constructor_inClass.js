class name {
  constructor(fname,lname) {
    this.name = "sundhar";
    this.last = "winston";
    console.log(`super constructor ${fname} ${lname}`);
  }
  getDetail(){
    console.log(`super function`);
  }
}

class detail extends name {
  constructor(fname,lname){
    super(fname,lname);
    console.log(this.name);
  }
  result = function() {
   return this.getDetail();
  }
}

let obj = new detail("hey","you");
console.log(obj.result());