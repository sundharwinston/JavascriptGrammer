var employee = {
    firstname: 'Sundhar',
    lastname: 'Winston',

};

var language = function(firstname, lastname) {
	console.log(`callApplyFname : ${firstname} callApplyLname : ${lastname}`)
};

let employeeDetail = function(fname,lname){
	console.log(`bindFname : ${this.firstname} bindLname : ${this.lastname}`)
}

language.call(employee,'javascript', 'React'); 
language.apply(employee,['javascript', 'React']); 

let bindMethod = employeeDetail.bind(employee,'javascript', 'React'); 
console.log(bindMethod);
console.log(bindMethod());
