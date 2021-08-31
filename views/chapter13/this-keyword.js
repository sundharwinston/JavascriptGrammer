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
}
check();
// console.log(window.datas);