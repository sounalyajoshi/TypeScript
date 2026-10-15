class worker{
    protected name:string="smith";
    protected salary:number=10000;

    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }

}
class manager extends worker{
    public display(){
        console.log(`workername:${this.name} salary:${this.salary}`);
    }
}
let m1=new manager("peter",25000);
m1.display();

class father{
    protected property:string="car";

    constructor(property:string){
        this.property=property;
    }
}
class son extends father{
    public display(){
        console.log(`property:${this.property}`);
    }
}


