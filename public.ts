class student{
    public name:string="jaanu";
    public age:number=22;
    public marks:number=85;

    constructor(name:string,age:number,marks:number){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    displayDetails(){
        console.log(`name:${this.name} age: ${this.age} marks:${this.marks}`);
    }
}

let s1=new student("janu",12,90);
s1.displayDetails();


class bankAccount{
    public accountHolder:string="jaanu"
    public accountNumber:number=2558677654;
    public balance:number=10000;

    constructor(accountHolder:string,accountNumber:number,balance:number){
        this.accountHolder=accountHolder;
        this.accountNumber=accountNumber;
        this.balance=balance;
    };
    diposit(amount:number):void{
        this.balance=this.balance+amount;
    }
    displayBalance():void{
        console.log(`Account Holder: ${this.accountHolder}, Balance: ${this.balance}`);
    }

}
let b1=new bankAccount("janu",2558677654,10000);
b1.diposit(2000);
b1.displayBalance();


class employee{
    public name:string="smith";
    public salary:number=50000;

    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }

    displayEmp(){
        console.log(`employeename:${this.name} salary:${this.salary}`);

    }

}

let e1=new employee("smith",56000);
e1.displayEmp();