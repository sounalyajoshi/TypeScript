"use strict";
class person {
    constructor() {
        this.name = "smith";
        this.accountno = 1324526;
    }
    getperson() {
        console.log(`name:${this.name} accountno:${this.accountno}`);
    }
}
let p1 = new person();
p1.getperson();
class student1 {
    constructor(studentName, marks) {
        this.studentName = "gowri";
        this.marks = 55;
        this.studentName = studentName;
        this.marks = marks;
    }
    displaystudentDetails() {
        console.log(`studentName:${this.studentName} marks:${this.marks}`);
    }
}
let Student = new student1("gowri", 55);
Student.displaystudentDetails();
