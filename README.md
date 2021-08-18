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
- [Chapter 5]
    - [Primitive Types](#Primitive-Types)
    - [boolean](#boolean)
    - [null](#null)
    - [undefined](#undefined)
    - [Number](#Number)
    - [bigint](#bigint)
    - [typeof](#typeof)
    - [string](#string)
    - [Template Strings](#Template-Strings)
    - [Symbol](#Symbol)
- [Chapter 6] Type Coercion Madness
    - [Type Coercion Madness](#Type-Coercion-Madness)
    - [Adding Multiple Values](#Adding-Multiple-Values)
    - [L-value and R-value](#L-value-and-R-value)
    - [null vs undefined](#null-vs-undefined)
- [Chapter 7] Scope
    -[Scope](#Scope)
        -[Variable Definitions](#Variable-Definitions)
            -[Variable Types](#Variable-Types)
            -[ Scope Visibility Differences](#Scope-Visibility-Differences)
            -[const and Arrays](#const-and-Arrays)
            -[const and Object Literals](#const-and-Object-Literals)
            -[Dos and Dont’s](#Dos-and-Dont’s)
- [Chapter 8] Operators
    -[Arithmetic](#Arithmetic)
    -[Assignment](#Assignment)


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


## Primitive Types

<div align="center">
    <img src="images/datatypes.png" width="650" alt="datatypes-Img">
</div>

All JavaScript values, except primitives, are objects.

`Mutable values` are those which can be modified after creation
`Immutable values` are those which cannot be modified after creation

Primitive type: <br>
- primitive values are immutable.
- Primitives are stored by value.

Non-Primitive type: <br>
- Non-primitive values are mutable.
- Non-Primitive (objects) are stored by reference. 

<div align="center">
    <img src="images/primitive-values.png" width="650" alt="primitive-values-Img">
</div>

## boolean 

    Possible Values : true | false
    typeof(boolean) : "boolean" string
    Constructor     : new Boolean(value)

## null 

    typeof(boolean) : "object"
    Constructor     : none

Some believe this is a bug in JavaScript because null is not an object since it doesn’t have a constructor. And they are probably right...

## undefined 

    typeof(boolean) : "undefined"  
    Constructor     : none

Undefined is a type of its own. It’s not an object. Just a value JavaScript will use when you named a variable but don’t assign a value to it. Your hoisted variables will also be automatically assigned a value of undefined.

## Number 

The number primitive helps us work with values in the numeric domain.

    Possible Values : -1 | 3 | 3.42 | 9.66e | Infinity | - Infinity | NaN
    typeof(boolean) : "number" string
    Constructor     : new Number(value)   

`Number Examples :`   

    typeof -1                           //number
    typeof 3                            //number
    let number =  new Number(3)         //object
    typeof number                       //object
    typeof number.valueOf()             //"number"

To get ”number” type from the object use typeof on the valueOf method as seen in the previous example typeof number.valueOf();

- NaN
The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number. The NaN property is the same as the Number.Nan property.
NaN is a property of the global object. In other words, it is a variable in global scope.

- There are five different types of operations that return NaN :
    - Number cannot be parsed `(e.g. parseInt("blabla")` or `Number(undefined))`
    - Math operation where the result is not a real number `(e.g. Math.sqrt(-1))`
    - Operand of an argument is NaN `(e.g. 7 ** NaN)`
    - Indeterminate form `(e.g. 0 * Infinity, or undefined + undefined)`
    - Any operation that involves a string and is not an addition operation `(e.g. "foo" / 3)`

`NaN Examples :`

        NaN === NaN;                                    // false
        Number.NaN === NaN;                             // false
        isNaN(NaN);                                     // true
        isNaN(Number.NaN);                              // true
        Number.isNaN(NaN);                              // true
        valueIsNaN(1);                                  // false
        valueIsNaN(NaN);                                // true
        valueIsNaN(Number.NaN);                         // true

`isNaN & Number.isNaN :`

`isNaN` just checks whether the passed value is not a number or cannot be converted into a Number. `Number.isNaN` on the other hand only checks if the value is equal to `NaN` (it uses a different algorithm than === though).

As you can see according to isNaN implementation treats string value as number and returns the result based on this. Check `isNaN(‘blabla’)`

<div align="center">
    <img src="images/confusing.gif" width="300" alt="Lol-Img">
</div>

        isNaN('hello world');        // true
        Number.isNaN('hello world'); // false

## bigint

BigInt is a built-in object whose constructor returns a bigint primitive. It also called a BigInt value, or sometimes just a BigInt. It represent whole numbers larger than `2^53 - 1 (Number.MAX_SAFE_INTEGER)`, which is the largest number JavaScript can represent with a number primitive (or Number value). BigInt values can be used for arbitrarily large integers.

    Possible Values : 1n | 3200n  likewise
    typeof(boolean) : "bigint" string
    Constructor     : new BigInt(value)

Syntax: 

    BigInt( number ) 
    or
    Appending n to end of an integer literal

Integer Range:

    let limit = Number.MAX_SAFE_INTEGER;console.log(limit);             //9007199254740991
    limit+2;                                                            //9007199254740992 (exceeded MAX_SAFE_INTEGER +1)

Example: Comparing BigInt with a Number.

    typeof 100n === 100        // Returns false
    typeof 100n ==  100        // Returns true due to coercion
    typeof 100n === 'bigint'   // Returns true
    100n < 101                 // Returns true due to coercion

Examples : 👉 

## typeof
Difference between numeric types:

        typeof 10;      //number
        typeof 100n;    //bigint

Equality operators can be used between the two types

        10n == BigInt(10);      //true
        10n == 10;              //true

Math operators only work within their own type

        10n / 10n;
        10n / 10;

Leading - works, but + doesn’t
        
        -10n    //-10n
        +10n    //TypeError

## string

    Possible Values : "text" | 'text' | `text` | `javascript is "brain" of html`
    typeof(boolean) : "string" string
    Constructor     : new String(value)

JavaScript is Case-Sensitive

    const a = 'a';
    const b = 'A'
    console.log(a === b); // false

## Template Strings (Es6)
Template literals are literals delimited with backticks (`string`), allowing embedded expressions called substitutions.

syntax for multi-line strings in template string:
JSON Literal :

    let json = `{"a" : 1}`; console.log(json);
    let json1 = '{"a" : 1}'; console.log(json1);


    console.log(`string text line 1
    string text line 2`);

    let a = 5;
    let b = 10;
    console.log(`Total is ${a + b}`);

## Symbol
Symbols are new primitive type introduced in ES6. `Symbols are completely unique identifiers`. Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.

    Syntax          : const symbol = Symbol('description');console.log(symbol);
    typeof(boolean) : "symbol" 
    Constructor     : none


Refer : 👉 https://developer.mozilla.org/en-US/docs/Glossary/Primitive

## Type Coercion Madness

`Type conversion :`
Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler automatically assigns data types, but the source code can also explicitly require a conversion to take place. 
For example, given the instruction 5+2.0, the floating point 2.0 is implicitly typecasted into an integer, but given the instruction `Number("0x11")`, the string "0x11" is explicitly typecasted as the number 17.

`Type Coercion :`

It's a dynamic process of type conversion.

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

The javascript engine takes the right datatype literals based on operator (+,-,* etc.) and done operations.

`Number And String Arithmetics :`
If both values are integers, arithmetic operation is performed. If one of them is a string then coercion happens and string addition is invoked.

Examples of Type Coercion 👇 <br>

<div align="center">
    <img src="images/type-coercion.png" width="650" alt="type-coercion-Img">
</div>

Source Code : 👉

## Adding Multiple Values
Operator Precedence
Example : `1 + 1 + 1 + 2 * " "`
<div align="center">
    <img src="images/operator-precedence.png" width="650" alt="operator-precedence-Img">
</div>

## String To Number Comparison
When it comes to equality operator == numeric strings are evaluated to numbers in the same way the Number(string) function evaluates to numbers (or NaN).

Eamples :

    1 ==  "1";          //true

    1 == "a";           //false
Note : If the string does not contain a numeric value, it will evaluate to NaN and therefore
further evaluating to false:

##  L-value and R-value
In many computer languages values on the left and right side of the operator are referred to as L-value and R-value.

`Assignment Operator :`
    The assignment operator takes the R-value and transfers it over to L-value, which is usually a variable identifier name.
`Arithmetic Addition Operator :`
    But the arithmetic addition operator takes the L-value and adds R-value to it:

## null vs undefined

<strong>Null:</strong> It is the intentional absence of the value. It is one of the primitive values of JavaScript.
The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and
is treated as falsy for boolean operations.
<strong>Undefined:</strong> It means the value does not exist in the compiler. It is the global object.

    isNaN(1 + null)      // false
    isNaN(1 + undefined) // true

- [null](#null)
- [undefined](#undefined)

Source Code : 👉

## Scope

Scope is simply the area enclosed by {} brackets. But be careful not to confuse it with the identical empty object-literal syntax.

There are 3 unique scope types:

- The global scope
- block scope 
- function scope 

Each expects different things and has unique rules when it comes to variable definitions. Event callback functions follow the same rules as function scope, they are just used in a slightly different context. Loops can also have their own block-scope.

## Variable Definitions

Variables are case-sensitive. This means a and A are two different variables:

    let a = 1;
    let A = "Hi"
    console.log(a);     // 1
    console.log(A);     // Hi

if you tried to refer to a variable that wasn’t defined anywhere, you would generate a ReferenceError error "variable name is not defined":
    
    console.log(x);      // ReferenceError : name is not defined
    {
    } 

Example : 
    
    var data = 1;
    {
        console.log(data);      // 1
    }

Here data is defined in global scope. But it can also be accessed from an inner block-scope. Anything (even a function definition) defined in global scope becomes available anywhere in your program. The value propagates into all inner scopes.

When a variable is defined in global scope using var keyword, it also automatically becomes available as a property on window object.

`Hoisting :`

- If data was defined using var keyword inside a block-scope, it would be hoisted back to global scope! Hoisting simply means ”raised” or ”placed on top of”.

- Hoisting is limited to variables defined using var keyword and function name defined using function keyword.

- Variables defined using let and const are not hoisted and their use remains limited
only to the scope in which they were defined.

Example :

    console.log(data);
    {
        var data = 1;
    }
Variable data is hoisted to global scope. But the value of the hoisted variable is now undefined not 1. Only its name definition was hoisted.

`Function Name Hoisting :`

Hoisting also applies to function names. But variable hoisting always takes precedence. You can call a function in your code, as long as it is defined at some point later:

    check();                                                //Hello i'm function definition
    function check() {
        console.log("Hello i'm function definition");
    }
Note that the function was defined after it was called. This is legal in JavaScript. Just make sure you understand that it happened because of function name hoisting.

    var d = function() {
        console.log("Hello i'm function definition");
    }
It is possible to assign an anonymous function expression to a variable name.

This valid JavaScript code will not produce a function redefinition error. Thefunction will be simply overwritten by second definition

    function check() {
        console.log(1);
    }
    function check() {
        console.log(2);
    }
    check();                    // 2

Note : However, this is still perfectly valid code – no error is generated. Whenever you have two function defined using function keyword and they happen to share the same name, the function that was defined `last will take precedence`.

     var check =  function() {
        console.log("variable assignment");
    }
    function chech() {
        console.log("normal funciton definition")
    }
    check();                                            // variable assignment

Note: The variable name will take precedence over function definitions even if it was defined prior to the second function definition with the same name.

## Variable Types

JavaScript is a dynamically-typed (Loosely typed) language.
The type of the variable (defined using var or let keyword) can be assigned and changed at any time during the run-time of your application, after it was already compiled by browser’s JavaScript engine

The keywords `var, let` and `const` do not determine the variable’s type. Instead, they determine how the variable can be used.
It can be `re-assigned` to another value during run-time? For example, `var and let can`, but `const can’t`.

`var :`
The var keyword is still with us from original specification. You should probably start using let and const instead. For the most part it is still available but only to support legacy code.

`let :`
let defines a variable but limits its use to the scope in which it was defined.
The developers prefer let keyword over var keyword, as it's an improvement over the var keyword. It helps us to assign the value or store it to some variable.

`const :`
const is the same as let but you can’t re-assign it to a new value once defined.

##  Scope Visibility Differences

`No Difference In Global Scope :`
When variables are defined in global scope there is no differences between var, let and const in terms of scope visibility.

<div align="center">
    <img src="images/global-scope.png" width="650" alt="global-scope-Img">
</div>

<div align="center">
    <img src="images/let-scope.png" width="650" alt="let-scope-Img">
</div>

`Closures :`

## const and Arrays
Changing a value in the const array is still allowed:

    const a = [];
    a[0] = 1;
    console.log(a);     //1
    a = [];             //TypeError: Assignment to constant variable.
You just can’t assign any new objects to the original variable name again.

## const and Object Literals
Similar to arrays, when it comes to object literals, const only makes the definition constant.

    const a = {
        parameter1 : 1,
        parameter2 : 2
    }
    a.parameter1 = "change";
    console.log(a);                 // {parameter1: "change", parameter2: 2}

## Dos and Dont’s

Do not use var unless for some reason you want to hoist the variable name.(These cases are rare and usually don’t comply with good software design.)

Do use let and const instead of var, wherever possible. Variable hoisting (variables defined using var) can be the cause of unpredictable bugs, because only the variable name is hoisted, the value becomes undefined.

Do use const to define constants such as PI, speed of light, tax rate, etc. values that you know shouldn’t change during the lifetime of your application.

## Arithmetic

<div align="center">
    <img src="images/arithmetic.png" width="650" alt="arithmetic-Img">
</div>

## Assignment

<div align="center">
    <img src="images/assignment.png" width="650" alt="assignment-Img">
</div>

## String
