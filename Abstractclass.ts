abstract class Animals{
    abstract sound():void;
 eat():void{
    console.log("animal eats food");
 }

}

class Dog extends Animals{
    override sound():void{
        console.log("dog barks");
    }
}
let dogs=new Dog();
dogs.sound();
dogs.eat();




