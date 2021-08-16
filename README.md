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
- [Chapter 2] Chrome Console
    - [Chrome Console](#Chrome-Console)
        - [copy](#copy)
            - [Example Code](https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter2/console-copy.js)
        - [console dir](#console-dir)
            - [Example Code](https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter2/console-dir.js)
        - [console error](#console-error)
            - [Example Code](https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter2/console-error.js)
        - [console time](#console-time)
            - [Example Code](https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter2/console-time.js)
        - [console clear](#console-clear)	
- [Chapter 3] Welcome To JavaScript
    - [Entry Point](#Entry-Point)
    - [readyState](#readyState)
    - [Dos and Dont’s](#Dos-Dont’s)
    - [DOM vs Media](#DOM-Media)
    - [Dynamic Import](#Dynamic-Import)
    - [Strict Mode](#Dynamic-Import)
    - [Literal Values](#Literal-Values)
    - [Variables](#Variables)
    - [Passing Values By Reference](#Passing-Values-By-Reference)
    - [Scope Quirks](#Scope-Quirks)
- [Chapter 4] Statements
    - [Evaluating Statements](#Evaluating-Statements)
    - [Expressions](#Expressions)


<!-- <details>
<summary>Dropdown:</summary>

- [dropdown-list](url)

</details>
 -->
<hr />
<p>
    <strong>I Love Javascript ❤</strong><br>
    “Everyone in this country should learn how to program because it teaches you how to think” – Steve Jobs.
</p>

<div align="center">	
<p>
<a href="https://www.javascript.com/">
<div>
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="150" alt="JS logo">
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

<h1>Chapter 1 : Presentation Format </h1>

## Presentation Format

Namely: imports, classes, constructors, key principles behind functional programming, including many features ranging from ES5 - ES10 These are all covered in this Documentaion

<h1>Chapter 2 : Chrome Console</h1>
## Chrome Console
Many of them know only Chrome’s `console.log` but the console API contains few other methods that console methods are explained below

## copy:

Copying JSON representation of an existing object to copy buffer:

    let object = { property1 : 1, property1 : 2, method : function(){} };
    copy(object);

It returns only JSON. `JSON string format does not support methods,only properties and value pair`

## console dir

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


## console error
    
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


## console time

The `console.time()` method starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to `10,000 timers running` on a given page. When you call `console.timeEnd()` with the same name, the browser will output the time, in `milliseconds`, that elapsed since the timer was started.

You can track the amount of time between function calls. This can be helpful
when optimizing code:
    
    console.time();
    let arr = Array(1000);
    for(let i=0; i<arr.length; i++) {
        arr[i] = new Object();
    }
    console.timeEnd();                                                                                         

## console clear
This method clears the console
            
    console.clear();

Printing Objects :

In JavaScript all objects have .toString() method. When providing an object sto console.log(value) it can print it either as an object, or as a string.

    let obj = {};
    console.log(obj);
    console.log("object = " + obj);
    console.log( `${obj}` );


Check it out more : 👉
https://developer.mozilla.org/en-US/docs/Web/API/Console

<h1>Chapter 3 : Welcome To JavaScript</h1>

## Entry Point

Every computer program has an entry point.

You can start writing your code directly into `<script>` tags. But this means it
will be executed instantly and simultaneously as the script is being downloaded
into the browser, without concern for DOM or other media.

This can create a problem because your code might be accessing DOM elements
before they are fully downloaded from the server.
To avoid this situation, you may want to wait until the DOM tree is fully available.

`addEventListener :`
The document.addEventListener() method attaches an event handler (event written in function) to the document (HTML Document).

`DOMContentLoaded event :`
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
*A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.*

Check it out : 👇 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/DOMContentLoaded.ejs
## readyState

The `document.readyState` property describes the loading state of the document.
When the value of this property changes, a readystatechange event execute the document object.

`Values :`
The readyState of a document value can be following one 
`loading`
    The document is still loading.
`interactive`
    The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading.
`complete`
    The document and all sub-resources have finished loading. The state indicates that the load event is to execute.
`Readystatechanges` <br>
Example : 👉 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/readystate.ejs <br>
Refer   : 👉 https://html.spec.whatwg.org/multipage/indices.html#event-readystatechange

## DOM vs Media

We’ve just created a safe place for initializing our application. But because DOM is simply a tree-like structure of all HTML elements on the page, it usually becomes available before the rest of the media such as images and various embeds.
Even though `image src` is a DOM element, the URL content specified in image’s src attribute might take more time to load.
To check if any non-DOM media content has finished downloading we can overload
the native window.onload event as shown in the following example.

`what is window`
The window object is supported by all browsers. It represents the browser's window.
1.All global JavaScript objects, functions, and variables automatically become members of the window object. like
2.`Global variables are properties` of the window object.
3.`Global functions are methods` of the window object.

Examples : window.open(); | close() 

`window.onload`
This method can wait until all images and similar media have been fully downloaded. <br>
Check it out : 👉 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/window-onload.ejs

## Including External Scripts

      <!DOCTYPE html>
      <html>
          <head>
              <title>Import Module</title>
              <script src="your-External-Script-path"></script>
          </head>
      </html>

## Import  
Starting from ES6 we should use import (and export) keyword to import variables,
functions and classes from an external file.
To make a variable, object or a function available for export, the export
keyword must be prepended to its definition.
Not everything in a module will be exported. Some of the items will remain private to it. Be sure to prepend export keyword to anything you want to export from the file.

`script type = "module"`
Whenever to export the class and start using it in the application, we must make sure the script tag’s type attribute is changed to `module` (this is required.)

      <!DOCTYPE html>
      <html>
          <head>
              <title>Import Module</title>
              <script type="module">
                import { Your class } from "./file";
                /* definition */
              </script>
          </head>
          <body>
          
          </body>
      </html>

## Importing And Exporting Multiple Definitions
To import multiple items (class/variable etc.) from two js files <br>
check it out : 👉 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/import.ejs

## Dynamic Import
        document.addEventListener("click", async() => {
            const module = await import(./file name);
            module.clickEvent();
        });

## Strict Mode
This strict context prevents certain actions from being taken and throws more exceptions. The statement `use strict;` instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.

Without strict mode, certain statements might not generate an error at all – even
if they are not allowed – 

`Benifits of using use strict`

- eliminates some JavaScript silent errors by changing them to throw errors.
- Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
- Strict mode makes it easier to write “secure” JavaScript.

How to use strict mode:
   Two methods to use strict mode there are,
   - Whole-script strict mode syntax 
   - Function-level strict mode 


Check it out : 👉 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/strictmode.js

## Literal Values

JavaScript Literals are constant values that can be assigned to the variables that are called literals. There are different types of literals that are supported by JavaScript.
1.Integer Literals - 1; 
2.String Literals  - "string";
3.Array Literals   - [];
4.Object Literals  - {};
5.Boolean Literals  - true/false;

The typeof(value) function can be used to determine type of the literal value.

Each literal value usually has a constructor function associated with it.
<div align="center">
    <img src="https://www.educative.io/api/edpresso/shot/5391633988190208/image/6039922861408256" width="650" alt="constructor-Img">
</div>

## Variables

There are 3 ways to declare a JavaScript variable:
1.var
2.let
3.const
But These declaration don't determine the variable's type.

Javascript is a Loosely Typed Language
A loosely typed language is a programming language that does not require a variable to be defined. For example, `Javascript` is a loosely typed language, you can declare a variable, but it doesn't require you to classify the type of variable.

`let & const :`
const is much more strict compare to let variables.
let and const are stored in different memory space. It's not in global space.

`Temporal Dead Zone :`
The time between undefined to store value action in let variable. To avoid temporal dead zone we must decleare a variable in top of the program (Top Initialization).

Check it out : 👉 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/variables.ejs

`Dynamic Typing`

JavaScript is a dynamically-typed language. It means that variables created using
var or let keywords can be dynamically re-assigned to a value of another type at
some point later in your JavaScript program.

In statically-typed languages doing that would generate an error.



## Passing Values By Reference

In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes happens in any of the parameter it affect the original value.

Example Code : 👉 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/passby-reference.ejs

## Scope Quirks
The let keyword doesn’t `hoist definitions`.

`Lexical Environment :`
- Do use the entry point to initialize the default state of your data and objects.
- This environment created whenever the execution context is created.
- It's a local memory + reference lexical environment parent
- Lexical Environment is a hierarchy (Sequence).
   
 `Lexical Example :`
   
        function a() {
            var a = 10;
            b();
            function b() { 
                console.log(a);
            }
        }
        a();    //function call   
Note :
    Here `b` function is inside `a` function. It is also called as `b` is Lexically inside `a` function.

Reference :  👉 https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8 <br>
Example Code : 👉 https://github.com/sundharwinston/JavascriptGrammer/blob/main/views/chapter3/scope-quirks.ejs

## Dos and Dont’s

- Do use the entry point to initialize the default state of your data and objects.
- Do make your program entry point either DOMContentLoaded, readyState or
  the native window.onload method for waiting on media (see next,) depending on
  whether you need to wait for just the DOM or the rest of media.
- Do not write your code just in script tags, without entry point function.

<h1>Chapter 4 : Statements</h1>

## Evaluating Statements

- In a programming language, these programming instructions are called statements.
- A JavaScript program is a list of programming statements. these are - Values | Operators | Expressions

- Definitions made with var, let or const keywords return undefined because they
behave only as value assignments: the value is simply stored in the variable name:
Example :    `let a = 1;`    

Statements usually produce a value. But when there isn’t anything to return, a statements will evaluate to undefined, which can be interpreted as ”no value.”

Example Code : 👉

## Expressions

Expressions produce values, they can appear anywhere in a program where JavaScript expects a value such as the arguments of a function invocation.
There are lots of expression types like Arithmetic Expressions,String Expressions,Logical Expressions, etc.

Example :

        10+10;  // This is another expression that is evaluated to produce the numeric value 20
        'Hello' + 'javascript';
        .
        .
        .
        //function call needed
        function check() { return 1; }
        check();
 
 Note :
 Function check() evaluates to value 1, because it returns 1. This is why f() is often referred to as a function expression.



