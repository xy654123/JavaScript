
// inheritance = useful for code reusability.
//               Reuse properties and methods of an existing class.
//               Children classes inherit from parent classes.

class Animal{

    constructor(){
        this.alive = true;
    }
    eat(){
        console.log("This creature is eating");
    }
}

class Rabbit extends Animal{

    run(){
        console.log("This rabbit is running");
    }
}
class Fish extends Animal{

    swim(){
        console.log("This fish is swimming");
    }
}
class Hawk extends Animal{

    fly(){
        console.log("This hawk is flying");
    }
}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();
let animal = new Animal();

console.log(rabbit.alive)

rabbit.eat();
rabbit.run();
fish.swim();
hawk.fly();

// inheritance는 이미만든 클래스를 다른 클래스에 똑같이 복재하고
// 추가로 기능을 추가하여 새로운 클래스를 만들수있다.
// (기존클래스 + 새로운클래스)