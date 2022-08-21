
// static = a method or property that belongs to a class
//          and not any one object


class Car{

    static numberOfCars = 0;

    static beginRace(){
        console.log("The race has begun!");
    }

    static beginRacee = 5;

    static add(num1, num2){
        return num1 + num2;
    }

    get asd(){
        console.log("blue archive");
    }

    asdd(){
        console.log("blue archive");
    }

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Challenger");

console.log(Car.numberOfCars);
Car.beginRace();
console.log(Car.beginRacee);
car1.asd;
car1.asdd();
console.log(Car.add(10, 20));
console.log(car1.add);

//https://www.youtube.com/watch?v=3dDhYbKcpok
//get은 메소드를 사용할때 ()를 안붙여도 된다
//static은 복제 클래스로 사용할수없고 원래 본래의 클래스로만 사용이가능하다.
//constructor은 생성자로 만들때만 사용된다.




