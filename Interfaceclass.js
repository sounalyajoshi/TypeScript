"use strict";
class UPI {
    pay() {
        console.log("payment is done using UPI");
    }
}
let upi = new UPI();
upi.pay();
class car {
    constructor() {
        this.brand = "BMW";
        this.speed = 200;
    }
    start() {
        console.log("car is starting");
    }
}
let Car = new car();
Car.start();
console.log(`brand:${Car.brand} speed:${Car.speed}`);
let s12 = {
    name: "janu",
    age: 22,
    studentId: 1234
};
console.log(`name:${s12.name} age:${s12.age} studentId:${s12.studentId}`);
