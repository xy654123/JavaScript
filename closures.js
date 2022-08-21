
// closure = A function with presered data.
//           Give you access to an outer function's scope,
//           from an inner function.

//           State of variables in outer scope are "saved".
//           Variables in outer scope are considered "private"




let score = function(){

    let points = 0;

    return function(){

        points += 1;
        return points;
    }   
}();

//points += 100;
console.log(score());
console.log(score());
console.log(score());



