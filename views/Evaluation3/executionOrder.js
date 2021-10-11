const ex1 = () => console.log(ex1);
const ex2 = () => console.log(ex2);
const ex = () => {
	console.log(ex);
	setTimeout(ex1, 1000);
	ex2();
}
ex();
