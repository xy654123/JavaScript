
// Why use getters & setters?

// a way to get/set the properties of an object
// Secures better data quality
// Does extra things behind-the-scenes

/*
let user = {

    firstName: "",
    lastName : "",
    set first(value){
        this.firstName = value.toUpperCase();
    },
    set last(value){
        this.lastName = value.toUpperCase();
    },
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};

user.first = "Spongebob";
user.last = "Squarepants";

console.log(user.fullName);
*/

class User {

    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    
    set first(value){
        this.firstName = value.toUpperCase();
    }
    set last(value){
        this.lastName = value.toUpperCase();
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};

let user1 = new User("spongebob", "squarepants");
let user2 = new User("patrick", "star");

console.log(user1.fullName);
console.log(user2.fullName);




