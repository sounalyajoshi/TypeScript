interface Payment{
    pay():void;
}

class UPI implements Payment{
    pay():void{
        console.log("payment is done using UPI");
    }
}
let upi=new UPI();
upi.pay();


interface vehicle{
    brand:string;
    speed:number;

    start():void;

}

class car implements vehicle{
    brand:string="BMW";
    speed:number=200;
    start():void{
        console.log("car is starting");
    }
}

let Car=new car();
Car.start();
console.log(`brand:${Car.brand} speed:${Car.speed}`);




interface Person{
    name:string;
    age:number;

}
 interface Student extends Person{
    name:string;
    age:number;

    studentId:number;
 }

 let s12:Student={
     name:"janu",
     age:22,
     studentId:1234
 };
    
 console.log(`name:${s12.name} age:${s12.age} studentId:${s12.studentId}`);