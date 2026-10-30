"use strict";
// here export helps to access the variables outside the namespace
var Students;
(function (Students) {
    Students.name = "ramya";
    Students.age = 22;
})(Students || (Students = {}));
console.log(Students.name);
console.log(Students.age);
var company;
(function (company) {
    function display() {
        console.log("welcome to our company");
    }
    company.display = display;
})(company || (company = {}));
company.display();
var EmployeeManagement;
(function (EmployeeManagement) {
    class Employee {
        display() {
            console.log("employee details");
        }
    }
    EmployeeManagement.Employee = Employee;
})(EmployeeManagement || (EmployeeManagement = {}));
let emp = new EmployeeManagement.Employee();
emp.display();
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
})(Calculator || (Calculator = {}));
console.log(Calculator.add(20, 20));
