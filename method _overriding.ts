class Animal{
sound(){
    console.log("animal make a sound");

    }
}

class dog extends Animal{
    sound(){
        console.log("dog barks");
    }
}
let a1=new Animal();
let d1=new dog();
a1.sound();
d1.sound();


class Employee{
work(){
    console.log("employee is working");
     }
}

class Manager extends Employee{
    work(){
        console.log("manager is managing the teams");
    }
}

let E1=new Employee();
let M1=new Manager();
E1.work();
M1.work();



class Payment{
    pay(){
        console.log("payment is done");
    }
}

class creditCardPayment extends Payment{
    override pay():void{
        console.log("payment is done using credit card");
    }
}

let payment =new creditCardPayment();
payment.pay();
let payment1=new Payment();
payment1.pay();
