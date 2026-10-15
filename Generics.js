"use strict";
//generic function with  return value
function identity(value) {
    return value;
}
console.log(identity(100));
console.log(identity("hello"));
// generic with array
function printItems(items) {
    items.forEach(item => {
        console.log(item);
    });
}
printItems([1, 23, 45, 60]);
printItems(["hello", "world", "typescript"]);
function disArray(items) {
    return (items.forEach(item => {
        console.log(item);
    }));
}
disArray([1, 2, 3, 4]);
function displayFruits(fruit) {
    return (fruit.forEach(fruit => {
        console.log(fruit);
    }));
}
displayFruits(["apple", "banana", "mango"]);
