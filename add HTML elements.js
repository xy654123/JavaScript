
// create HTML elements
// h1.innerHTML (vulnerable to XSS attacks)
// h1.innerText (better)
// document.createElement : 특정 태그를 생성합니다
// appendChild : 어느 부모에 추가할지를 결정합니다

const h1 = document.createElement("h1");
const underline = document.createElement("u");
//h1.innerHTML = "<u>Hello World!<u>";
underline.innerText = "Hello World!";
h1.append(underline);
document.body.append(h1);


const h2 = document.createElement("h2");
const italic = document.createElement("i");
italic.innerText = "Sup?";
h2.append(italic);
document.body.append(h2);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "Bye...";
p.append(bold);
document.body.append(p);

