"use strict";
class Animals {
    eat() {
        console.log("animal eats food");
    }
}
class Dog extends Animals {
    sound() {
        console.log("dog barks");
    }
}
let dogs = new Dog();
dogs.sound();
dogs.eat();
