"use strict";
class student {
    constructor(name, age, marks) {
        this.name = "jaanu";
        this.age = 22;
        this.marks = 85;
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    displayDetails() {
        console.log(`name:${this.name} age: ${this.age} marks:${this.marks}`);
    }
}
let s1 = new student("janu", 12, 90);
s1.displayDetails();
class bankAccount {
    constructor(accountHolder, accountNumber, balance) {
        this.accountHolder = "jaanu";
        this.accountNumber = 2558677654;
        this.balance = 10000;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    ;
    diposit(amount) {
        this.balance = this.balance + amount;
    }
    displayBalance() {
        console.log(`Account Holder: ${this.accountHolder}, Balance: ${this.balance}`);
    }
}
let b1 = new bankAccount("janu", 2558677654, 10000);
b1.diposit(2000);
b1.displayBalance();
class employee {
    constructor(name, salary) {
        this.name = "smith";
        this.salary = 50000;
        this.name = name;
        this.salary = salary;
    }
    displayEmp() {
        console.log(`employeename:${this.name} salary:${this.salary}`);
    }
}
let e1 = new employee("smith", 56000);
e1.displayEmp();
