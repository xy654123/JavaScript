
// modify HTML elements
// document.getElementById() (older)
// document.querySelector() (newer, morepowerful)

document.querySelector("#myButton").onclick = function(){

    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerHTML = "Bye World!";
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    //p[0].innerText = "WHOAAAAAAA!"; 배열번째의 <p>텍스트를 바꾼다
    p.forEach(element => element.innerText = "WHOA!");

    const buttons = document.querySelectorAll("button");
    //buttons[0].remove(); 배열번째의 버튼을 제거시킴
    buttons.forEach(element => element.remove())
}






