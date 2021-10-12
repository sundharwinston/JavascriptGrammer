var a = 5;

var obj = {
    myMethod:() => {
        console.log(this);
        console.log(this.a);		// arrow function refers a global elements
    },

    data() {
    	console.log(this.a);	// function does not refers a global elements
    }
};
obj.myMethod();
obj.data();