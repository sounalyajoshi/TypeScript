"use strict";
var colors;
(function (colors) {
    colors["red"] = "RED";
    colors["blue"] = "BLUE";
    colors["pink"] = "PINK";
})(colors || (colors = {}));
let myColor = colors.pink;
console.log(myColor);
console.log(colors.blue);
var direction;
(function (direction) {
    direction[direction["North"] = 0] = "North";
    direction[direction["South"] = 1] = "South";
    direction[direction["East"] = 2] = "East";
    direction[direction["West"] = 3] = "West";
})(direction || (direction = {}));
console.log(direction);
console.log(direction.South);
var days;
(function (days) {
    days["mon"] = "monday";
    days["tus"] = "tuesday";
    days["wed"] = "wednesday";
    days["thr"] = "thursday";
    days["fri"] = "friday";
})(days || (days = {}));
;
console.log(days);
