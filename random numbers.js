
// Math.random() = generates a pseudo-random between 0 and 1
//                 Don't use this for security purposes              

var randnum;

//randnum = Math.random(); // 0 - 1
//randnum =  Math.floor(Math.random() * 6); //0 - 5
//randnum =  Math.floor(Math.random() * 6) + 1; //1 - 6
//randnum =  Math.floor(Math.random() * 100); //0 - 99
//randnum =  Math.floor(Math.random() * 100) + 1; //1 - 100

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}




console.log(randnum)






