# Javascript Learning

> JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript 
>specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has 
>curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

>
## Table of Contents


- [Content](#content)
- [Chapter 1]
	- [Presentation Format](#Presentation-Format)
    	- [Fundamental Principles](#Fundamental-Principles)
- [Chapter 2]
    - [Chrome Console](#Chrome-Console)
        - [copy](#copy)
            - [Example Code](#copy)
        - [console.dir](#console.dir)
        - [console.error](#console.error)
        - [console.time](#console-time)
        - [console.clear](#console-clear)

<!-- <details>
<summary>Dropdown:</summary>

- [dropdown-list](url)

</details>
 -->
<div align="center">
	<hr />
    <p>
        <strong>i Love Javascript:</strong>
    </p>
    <p>
        <a href="https://www.javascript.com/">
            <div>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="350" alt="JS logo">
            </div>
        </a>
    </p>
    <br />
    <hr />
</div>

## content

We won’t spend much book space or your time on countless listings of functions
and available methods on every single object. This type of information can be
easily looked up and practiced online on demand from Mozilla’s MDN web docs,
W3Schools and StackOverflow.

Much of content of this book is tailored to modern JavaScript development, which
leans toward >= EcmaScript6 specification, functional programming: the use of
higher-order Array functions, arrow functions and understanding execution context.


## Presentation Format

Namely: imports, classes, constructors, key principles behind functional programming, including many features ranging from ES5 - ES10 These are all covered in this Documentaion


## Chrome Console
Many of them know only Chrome’s `console.log` but the console API contains few other methods that console methods are explained below

## copy:

Copying JSON representation of an existing object to copy buffer:

    let object = { property1 : 1, property1 : 2, method : function(){} };
    copy(object);

It returns only JSON. `JSON string format does not support methods,only properties and value pair`

## console.dir

If you want to look at all the object’s properties and methods,you can use console.dir method:

`console.dir(object)`

    let object = { property1 : 1, property1 : 2, method : function(){} };
    console.dir(object);
    Output : 👇
    > Object
        >method: ƒ ()
         property1: 2
        >[[Prototype]]: Object

`console.dir(document.body)`
you can look at the output DOM elements:

    console.dir(document.body);
    Output : 👇
    > body
        aLink: ""
        accessKey: ""
        ariaAtomic: null
        ariaAutoComplete: null
        ariaBusy: null
        ariaChecked: null
        ariaColCount: null


## console.error
    
    let value = 50;
    function start() {
        function end() {
            console.error("Function Ended");
        }
        if(value > 50) {
            //ok
        }else {
            end();
        }
    }
    start();  //function call

console.error is provides the stack trace:

    output : 👇
    Function Ended
        end         @ VM429:4
        start       @ VM429:9
        (anonymous) @ VM429:12


## console.time

The `console.time()` method starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to `10,000 timers running` on a given page. When you call `console.timeEnd()` with the same name, the browser will output the time, in `milliseconds`, that elapsed since the timer was started.

You can track the amount of time between function calls. This can be helpful
when optimizing code:
    
    console.time();
    let arr = Array(1000);
    for(let i=0; i<arr.length; i++) {
        arr[i] = new Object();
    }
    console.timeEnd();                                                                                         

## console.clear
This method clears the console
            
    console.clear();

Printing Objects :

In JavaScript all objects have .toString() method. When providing an object
to console.log(value) it can print it either as an object, or as a string.

    let obj = {};
    console.log(obj);
    console.log("object = " + obj);
    console.log( `${obj}` );


Check it out more : 👇
https://developer.mozilla.org/en-US/docs/Web/API/Console

