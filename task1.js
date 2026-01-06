//WRITE A FUNCTION THAT RECEIVES MARKS ARRAY AS A ARGUMENT AND RETURNS THE SMALL ELEMENT
// Function to find the smallest element
function getSmallestMark(marks) 
{
    let smallest = marks[0];

    for (let mark of marks)
    {
        if (mark < smallest)
        {
            smallest = mark;
        }
    }

    return smallest;
}
let m = [90, 87, 89, 67, 56];
console.log("Smallest mark:", getSmallestMark(m));
