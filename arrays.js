

// array = a special variable,
/*  that can hold more than  
    
    Each "space" is known as an element

    You access elements in an array by referring
    to the index number ex.[0]
*/

var cars = ["Mustang","Corvette","Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Tesla"); //add an element
console.log(cars);
cars.pop();         //removes last element
console.log(cars);

var numberOfCars = cars.length; //returns length of array

/*
cars = cars.sort(); //sorts an array alphabetically/number
console.log(cars);

cars = cars.reverse(); //reverse sort an array
console.log(cars);
*/

var lastCar = cars[cars.length-1];


console.log(cars);
console.log(numberOfCars);
console.log(lastCar);


