//PACKING OBJECT

let emp={eno:100,ename:"Mahi",salary:5000}

//Accessing Object Properties 
console.log(emp.ename);

//Adding New Property
emp.designation="Developer"

//Updating Existing Property
emp.eno=1234

//Deleting Property
delete emp.salary

//Freeze an Object
Object.freeze(emp);
emp.no=12345; //will not be added    
console.log(emp)

//read keys of Object
let keys=Object.keys(emp);
console.log(keys);

//read values of Object
let values=Object.values(emp);
console.log(values);

