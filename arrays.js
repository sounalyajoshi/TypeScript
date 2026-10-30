"use strict";
let students = [
    "arjun",
    "kavya",
    "janu",
    "sonu"
];
console.log(students);
var numbers = [10, 20, 30, 40];
console.log(numbers);
//taking empty array and pussing values to it
let nums = [];
nums.push(10);
nums.push(20);
nums.push(30);
nums.push(40);
console.log(nums);
let Chracters = ["A", "B", "C", "D"];
Chracters.pop();
console.log(Chracters);
console.log(Chracters[1]);
// update value in array
Chracters[1] = "a";
console.log(Chracters[1]);
console.log(Chracters);
console.log(Chracters.length);
let subjects = ["maths", "science", "kannada", "english"];
subjects.forEach(subject => {
    console.log(subject);
});
let familiMembers = ["father", "mother", "grandFather", "grandMother", "brother", "sisters", "husband"];
familiMembers.forEach(fam => {
    console.log(fam);
});
let number = [1, 2, 3, 4, 6, 7];
console.log(number);
number.push(10);
console.log(number);
number.pop();
console.log(number);
console.log(number.length);
