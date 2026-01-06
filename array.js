let marks =[90,87,89,67,56]
let skills=['html','javascript','angular']
//accessing elements
console.log(marks[0])
console.log(marks[4])//out of bounds[undefined]
//iteration
    //for-of loop
    for(let v of marks)
    {
        console.log(v)
    }

// FIND THE SUM OF MARKS USING FOR-OF LOOP
let m = [90, 87, 89, 67, 56];

let sum = 0;

for (let marks of m) {
    sum += marks;
}

console.log("Sum of marks:", sum);
