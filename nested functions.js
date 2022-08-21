
// nested function = Funtions inside other functions.
//                   Outer functions have access to inner functions.
//                   Inner functions are "hidden" from outside the scope.
//                   used in closures (future video topic)
//

function login(){

    let userName = "Bro";
    let userInbox = 0;

    function displayUserName(){

        console.log("Hello", userName);
    }

    function displayUserInbox(){

        console.log("You have",userInbox,"new messages");
    }

    displayUserName();
    displayUserInbox();
}

login();
//displayUserName();
//displayUserInbox();
//function 안에 있는 function이기 때문에 작동하지않는다.

