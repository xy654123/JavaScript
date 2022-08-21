
// useful string properties & methods

var myName = "Bro code";
var myStreet = "123 Fake st.";
var myCity = "Nowhere XY 12345";
var myPhone ="123-456-7890";

console.log(myName.length); //문자의 길이
console.log(myName.charAt(0)); //지정 숫자 문자 출력 ex)0 > B , 2 > o
console.log(myName.indexOf("o")) 
// 문자 위치를 숫자로 출력 같은문자일 경우 처음 문자 위치 출력
console.log(myName.lastIndexOf("d")); 
// 문자 위치를 숫자로 출력 같은문자일 경우 마지막 문자 위치 출력
console.log(myName.trim()); //문자열 양쪽의 공백을 제거
console.log(myName.toUpperCase()); //대문자로 바꿔서 출력
console.log(myName.toLowerCase()); //소문자로 바꿔서 출력

//var firstName = myName.slice(0, 3);
var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);
//문자시작위치,문자 끝 위치 선택한다

//var lastName = myName.slice(4);
var lastName = myName.slice(myName.indexOf(" ") + 1);
console.log(lastName);
//선택위치에서 끝까지 선택한다

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress)
//두 문자 결합

myPhone = myPhone.replaceAll("-","");
console.log(myPhone);
//"","" 첫번째 문자을 두번쨰 문자로 바꾸어줌 => 문자를 바뀌주는 기능
