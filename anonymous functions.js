
// anonymous function = Function w/o a name.
//                      Often not accessible after
//                      its initial creation.

//declared functions = "saved for later use"

// benefits = Doesn't clutter global namespace
//            Usable once
//            Can be passed as arguments

// IIFE = a JS function that runs as soon as it is defined
// grouping operator = ()

(function(){
    document.getElementById("myH1").innerHTML = "hey!";
})();

// setTimeout(function, milliseconds);

let task = function(){document.getElementById("myH1").innerHTML = "sup?";};

setTimeout(task, 1000);

/*
setTimeout(function(){
    document.getElementById("myH1").innerHTML = "sup?"
},
 1000);
*/

