"use strict";
let studentsDetails = ["janu", 12];
console.log(studentsDetails);
let personDetail = ["smith", 22, "employee"];
console.log(personDetail[1]);
console.log(personDetail);
let carDetails = ["bmw", 100000000, "pink"];
for (let i = 0; i < carDetails.length; i++) {
    console.log(carDetails[i]);
}
let islogin = ["janu", true];
console.log(islogin);
let order = [5001, "mobile", 25000, true];
console.log("order id:", order[0]);
console.log("product:", order[1]);
console.log("price:", order[2]);
console.log("isDelivered:", order[3]);
let studentz = [101, "smith", 85];
console.log("studentz id:", studentz[0]);
console.log("studentz name:", studentz[1]);
console.log("studentz marks:", studentz[2]);
let product = [1, "laptop", 50000];
let [pid, pname, price] = product;
console.log("product id:", pid);
console.log("product name:", pname);
console.log("product price:", price);
