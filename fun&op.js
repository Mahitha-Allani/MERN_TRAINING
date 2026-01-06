//a function never executes by itself but it should be explicitly called 
//function declaration
function sumOfTwoNumbers(a,b)
{
    let sum=a+b
    return sum
}
//function calling
let result=sumOfTwoNumbers(10,20)
console.log(result)

console.log(typeof sumOfTwoNumbers)

//write a function to find the big number out of three numbers
function largestNumber(a,b,c)
{
    if(a>b && a>c)
    {
        console.log("a is bigger number:",a)
    }
    else if(b>a && b>c)
    {
        console.log("b is bigger number:",b)
    }
    else
    {
        console.log("c is bigger number:",c)
    }
}
largestNumber(30,20,10)

//-------------------------------------------------------------------------------------------------
//operators

let a=10
let b=5

console.log(a/b)
console.log(a%b)

let x=100
let y='100'
console.log(x==y)//compares the values but not the datatypes[results true]
//therefore use strict equality
console.log(x===y)//this compares datatypes also 


