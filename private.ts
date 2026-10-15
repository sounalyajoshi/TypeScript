class person{
    private name:string="smith";
    private accountno:number=1324526;

    public getperson(){
        console.log(`name:${this.name} accountno:${this.accountno}`);
    }
    
}
let p1=new person();
p1.getperson();



class student1{
  private studentName:string="gowri";
  private marks:number=55;
  constructor(studentName:string,marks:number){
    this.studentName=studentName;
    this.marks=marks;
  }
  public displaystudentDetails(){
    console.log(`studentName:${this.studentName} marks:${this.marks}`);
}
}
let Student=new student1("gowri", 55);
Student.displaystudentDetails();
