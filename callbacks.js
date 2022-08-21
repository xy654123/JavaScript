
// callback = function passed as an argument to another function.
//            Allows a function to invoke another function


let message;

function displayConsole(output){

    console.log(output);
}

function displayDOM(output){

    document.getElementById("myH1").innerHTML = output;
}


function setmessage(text, callback){

    message = text;
    callback(message);
}


setmessage("Hi mom!", displayConsole);
setmessage("Hi mom!", displayDOM);

