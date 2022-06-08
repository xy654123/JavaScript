/*
    A function is a block of code designed to perform
    a particular task/procedure. (subroutine)

    We invoke "call" whenever we  want ti to do something.
    We need to define what we want task to do.
*/

/*
function sayHello(){
    console.log("Hello");
    console.log("Have a nice day!")
    console.log("Goodbye!")
};

sayHello();
sayHello();
*/
/*
function sayHello(name, age){
    console.log("Hello",name);
    console.log("You are",age,"years old")
    
};

sayHello("Bor", 21);
*/

function toCelsius(f){
     return (f-32) * (5/9);
};

function toFarenheit(c){
    return (c * 9/5) + 32;
}

var myTemp1 = toCelsius(100);
var myTemp2 = toFarenheit(37.7);

console.log("My temp in C is",myTemp1,"degrees");

console.log("My temp in F is",myTemp2,"degrees");








