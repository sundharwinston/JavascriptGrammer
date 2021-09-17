var employee = {
    firstname: 'Pika',
    lastname: 'Chu ',

};

var language = function(language1, language2) {
    console.log(' loves ' + language1 + ' and ' + language2);
};

language.call(employee,'javascript', 'React'); 
language.apply(employee,['javascript', 'React']); 

let bindMethod = language.bind(employee,'javascript', 'React'); 
console.log(bindMethod);
console.log(bindMethod());
