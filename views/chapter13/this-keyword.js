var lang = {
  firstName:"java",
  lastName: "script",
  checkfunction : function() {
  		console.log(this.firstName);
  }
}
lang.checkfunction();




function check() {
    this.datas = "This value";
    console.log(datas);
}
check();
// console.log(window.datas);