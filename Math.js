
// Math = An object that provides basic
//        mathematics funtionality and constants.

var myNum;

//myNum = Math.round(3.5); 반올림
//myNum = Math.floor(3.9); 내림
//myNum = Math.ceil (3.1); 올림
//myNum = Math.pow(3, 3); 제곱
//myNum - Math.sqrt(64); 제곱근
//myNum = Math.abs(-1); 절댓값
//myNum = math.min(1, 5, 2, 4, 3); 제일작은값
//myNum = math.max(1, 5, 2, 4, 3); 제일큰값
//myNum = Math.PI; 파이
//myNum = Math.E;

//console.log(myNum);

// solve for hypotenuse of a right triangle


var a = window.prompt("Enter side A");
var b = window.prompt("Enter side B");
var c;

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log("Side c =",c)

