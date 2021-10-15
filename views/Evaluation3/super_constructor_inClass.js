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


// =========================================================
// class Parent {
//     autoPlay() {
//         this.play("automatically "); 
//     }
//     play(x) {
//         console.log(x+"playing default from "+this.constructor.name);
//     }
// }

// class ChildA extends Parent {
//     // does not override play
// }
// class ChildB extends Parent {
//     constructor(song) {
//         super(song);
//         this.song = song;
//         console.log(song);
//     }
//     play(x) {
//         console.log(x+"playing "+this.song+" from ChildB");
//     }
// }

// const child1 = new ChildA();
// child1.autoPlay();
// const child2 = new ChildB("'Yeah'");
// child2.autoPlay();