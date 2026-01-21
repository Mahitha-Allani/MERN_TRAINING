//STUDENTS use advance operators to complete the following tasks:

let students =[{sno:1,name:"Mahi",age:20},{sno:2,name:"Raju",age:22},{sno:3,name:"Sita",age:19},{sno:4,name:"Gita",age:15}];
//find student with age less than 20(use filter SELECTION and arrow)

let stud20 = students.filter(student => student.age < 20);
console.log(stud20);

//add or increment age by 2 years for raju(use map TRANSFORMATION and arrow)

let updatedStudents = students.map(student => {
    if(student.name === "Raju")
    {
        return {                        
            sno: student.sno,
            name: student.name,
            age: student.age + 2
        }
    }
    return student;
})
console.log(updatedStudents)

//find the sum of ages of all students(use reduce AGGREGATION and arrow)
//initial value is 0 so accumulator starts with 0 
let totalAge = students.reduce((accumulator, student) => accumulator + student.age,0);
console.log(totalAge);