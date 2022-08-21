
// date object = represents a moment in time
//               since epoch (reference point)

date = new Date(0);
date = new Date();
date = new Date(2022, 3, 4, 18, 1, 2, 3);
date = new Date("April 20, 2022, 16:20:01:02");
/*
let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayofMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();
*/
/*
console.log(year); 년도
console.log(month); 달 0에서부터 시작하기때문에 0(1월) ...11(12월)
console.log(dayOfWeek); 요일 0(일요일) ~6(토요일)
console.log(dayofMonth); 날짜
console.log(hours); 시간
console.log(minutes); 분
console.log(seconds); 초 
console.log(milliSeconds); 작은초
*/
/*
date.setFullYear(2023);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
*/
console.log(date);

