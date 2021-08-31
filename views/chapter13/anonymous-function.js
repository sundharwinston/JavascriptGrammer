setTimeout(function (){
    console.log("print something in 1 second.");  
    console.log(arguments);
},1000);

document.addEventListener("click",function (){
    console.log("Document was clicked.");
    console.log(arguments);
});