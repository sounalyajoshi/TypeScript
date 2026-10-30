
// here export helps to access the variables outside the namespace
namespace Students{
    export let name:string="ramya";
    export let age=22;
}
console.log(Students.name);
console.log(Students.age);



namespace company{
    export function display():void{
        console.log("welcome to our company");
    }
}
company.display();


namespace EmployeeManagement{
    export class Employee{
        display():void{
            console.log("employee details");
        }
    }
}
let emp=new EmployeeManagement.Employee();
emp.display();

namespace Calculator{
    export function add(a:number,b:number):number{
        return a+b;
    }


}
console.log(Calculator.add(20,20));