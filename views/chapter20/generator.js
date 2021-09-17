 function* generatorFunc() {
    yield 10;
    yield 20;
    yield 30;
}
const obj = generatorFunc();

let next = obj.next();
console.log(next);