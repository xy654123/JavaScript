
// reduce() = Reduces an array to a single value
//            The return value of the  callback
//            function is the accumulated result,
//            and is provided as an argument in
//            the next call to the callback function.

let letters = ["H", "E", "L", "P"];

function combineLetters(total, nextLetter, index, array){
   
    return total + nextLetter;
}

let word = letters.reduce(combineLetters);
//reduceRight() 반대방향기능
console.log(word);







