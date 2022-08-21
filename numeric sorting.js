
// 


let numbers = [3, 14, 1, 2, 5];

//numbers.sort(); //ASCII character order
/*
numbers.sort(function(x, y){
    return y - x;
})
*/

numbers.sort((x, y) => y - x);

console.log(numbers);






