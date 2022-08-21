
// Mouse events
// element.addEventListener(type, function);


const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

/* 클릭
div.addEventListener("click", e => {
    console.log("You clicked the mouse!");
    div.style.backgroundColor = "yellow";
})
*/
/* 홀드
div.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})

div.addEventListener("mouseup", e => {
    console.log("You let go of the mouse!");
    div.style.backgroundColor = "grey";
})
*/

/* 더블클릭
div.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "purple";
})
*/

/*우클릭
div.addEventListener("contextmenu", e => {
    console.log("You opened the context menu");
})
*/

/*마우스를 둘때(클릭X)
div.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    div.style.backgroundColor = "grey";
})
*/
/*마우스 움직임 만큼
div.addEventListener("mousemove", e => {
    console.log("You are within the square!");
})
*/