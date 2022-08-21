
// function expression = A function can also be defined using an expression.
//                       Function expression  can be stored in a variable,
//                       The variable can be used as a function.
//                       They can be invoked by adding ()
//
//                       1. Useful as closures
//                       2. Used in IIFE (funcs that runs as soon as it's defined)
//                       3. Can be passed as arguments to other functions
//

// ********************
// function declaration
// ********************
/*
sayHello();

function sayHello(){

    console.log("Hello");
}
*/
// ********************
// function declaration
// ********************
/*
//let greeing = function(){console.log("Hello")};
//let greeing = function(){document.getElementById("myH1").innerHTML = "Hello"};

output(greetion)

function output(fucn){

    console.log(func)
}

function을 다른 function으로 전달가능

*/
let greeing = "Hello"

outputConsole(greeing);
outputWebsite(greeing);

function outputConsole(x){

    console.log(x)
}

function outputWebsite(x){

    document.getElementById("myH1").innerHTML = x;
}




