type  StudentName = String;
  let snam:StudentName ="smith";
  console.log(snam);


  //type alias for multiple data types

  type id = string | number;

  let studentId: id =101;
  let employeeId:id="emp102";

  console.log(studentId);
  console.log(employeeId);