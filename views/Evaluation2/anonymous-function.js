setTimeout(
	function (){										// The function without name i.e Anonymous function
	    console.log("print something in 1 second.");  
	    console.log("Hi i'm anonymous");
	}
,1000);

document.addEventListener("click",
	function (){										// This is Anonymous function
	    console.log("Document was clicked.");
	    console.log(arguments);
	}
);

