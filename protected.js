"use strict";
class worker {
    constructor(name, salary) {
        this.name = "smith";
        this.salary = 10000;
        this.name = name;
        this.salary = salary;
    }
}
class manager extends worker {
    display() {
        console.log(`workername:${this.name} salary:${this.salary}`);
    }
}
let m1 = new manager("peter", 25000);
m1.display();
class father {
    constructor(property) {
        this.property = "car";
        this.property = property;
    }
}
class son extends father {
    display() {
        console.log(`property:${this.property}`);
    }
}
