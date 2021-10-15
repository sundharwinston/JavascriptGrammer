 function* generatorFunc() {
    yield 10;
    yield 20;
    yield 30;
}
const obj = generatorFunc();

// for( let data of obj)
// 	console.log(data);

let next = obj.next();
console.log(next);