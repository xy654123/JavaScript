
// logical operators = used to write ore
//                     complex conditions

// && and (checks if both conditions are true)
// || of (checks if at least 1 condition is true)
// ! not (reverses boolean value)

/*
var temperature = 15; //Celsius

if(temperature > 30){
    console.log("It's HOT outside!");
}
else if(temperature > 0 && temperature <=30){
    console.log("It is warm outside!");
}
else{
    console.log("It's COLD outside!");
}
*/

/*
var hour = 5; //military time

if(hour < 6 || hour >= 20){
    console.log("It's DARK outside!");
}
else{
    console.log("It's LIGHT outside!");
}
*/

var myName = window.prompt("Enter your name")

if(!(myName == "")){
    console.log("Hello",myName)
}
else{
    console.log("You did not enter your name!")
}



