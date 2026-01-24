//***FILTER()***


let marks=[10,30,89,65,45]
//write a function that can extract marks greater than 70,pack them into an array and return it
function extractHighMarks(marksArray)
{
    let highMarks = marksArray.filter(function(marks) {
        return marks > 70;
    }
    );
    return highMarks;
}  
console.log(extractHighMarks(marks)); 

//USING ARROW FUNCTION => contains return implicitly
function extractHighMarksArrow(marksArray)
{
    let highMarks = marksArray.filter(marks => marks > 70);
    return highMarks;
}
console.log(extractHighMarksArrow(marks));


// FIND ALL MARKS BETWEEN 30 AND 90 WITHOUT USING ARROW FUNCTION
function MarksInRange(marksArray)
{
    let inRange = marksArray.filter(function(marks)
    {
        return marks > 30 && marks < 90;
    });
    return inRange;
}
console.log(MarksInRange(marks));

//-------------------------------------------------------------------------------------------------
//***MAP()***

let salaries=[100,200,300]
//add 50 for each salary and return the updated salaries in an array
    let updatedSalaries = salaries.map(function(salary)
    {
        return salary + 50;
    });
    console.log(updatedSalaries);


/*
let results=marks.map(elements=>elements+5);
console.log(results);
*/

//---------------------------------------------------------------------------------------------
//***REDUCE()***
//find sum of the marks
//accumulator is a variable that holds the sum of all previous iterations
let sum = marks.reduce((accumulator, elements) => accumulator + elements, 0);
console.log(sum);

//find small element by using reduce
let smallest = marks.reduce((accumulator, elements) => (accumulator < elements) ? accumulator : elements);
console.log(smallest);

//find the smallest element with normal function
let smallestNormal = marks.reduce(function(accumulator, elements)
{
    return (accumulator < elements) ? accumulator : elements;
});
console.log(smallestNormal);

//---------------------------------------------------------------------------------------------
//***FIND()***
    //find 23
    let result=marks.find(elements=>elements===23)
    console.log(result); //undefined
//---------------------------------------------------------------------------------------------

//***FINDINDEX***
     //find index of 23
        let index=marks.findIndex(elements=>elements===23)
        console.log(index); //returns -1 because element not found
        