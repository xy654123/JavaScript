
// forEach() = performs a function for each
//             element in an array.


let total = 0;
let cart = [ 6, 7, 8, 9];

function checkOut(element, index, array){

    total += element;
}

cart.forEach(checkOut);


console.log("Your total is: $"+total);





