//UNPACKING OBJECTS(DESTRUCTURING OBJECTS)
let test={a:10,b:20,c:30,d:40}

//unpacking object properties into variables
//This syntax is only applicable for objects of limited size.This is called DESTRUCTURING OF OBJECTS
let {a,b,c,d}=test;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Complex Object
let student ={
    sn0:100,
    sname:"Mahi",
    marks:[90,85,86],
    address:{city:"Hyd",pincode:500081},
getData:function()//it is a method of student object beacuse it is inside the object
{
    //object processing business logic
   console.log(this.marks[0])// this searches property inside the same object
},
   //find the average marks of student and return the average
getAverage:function()
{
   let total=0;
    for(let i=0;i<this.marks.length;i++)
    {
        total=total+this.marks[i];
    }
    let avg=total/this.marks.length;
    return avg;
}
}
console.log(student.marks)
console.log(student.address.city)
student.getData();
console.log("Average Marks:"+student.getAverage());