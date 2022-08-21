
// method overriding = a child class will use methods
//                     with the same name that are
//                     most closely associated with it.



class Vehicle{


    akak(){
        console.log("You drive the vehicle");
    }


}

class Car extends Vehicle{

    drive(){
        console.log("You drive the car!");
    }

}

class RaceCar extends Car{

    drive(){
        console.log("You drive the racecar!!!!!!!!!");
    }
}


let car = new Car();
let raceCar = new RaceCar();

car.drive();
raceCar.drive();
raceCar.akak();


