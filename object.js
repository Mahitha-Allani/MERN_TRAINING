//object(pack of properties)
//properties-> key:value pair
let empObj={
    empNo:100,
    name:"mahi",
    age:20
}
//accesing prop
console.log(empObj.empNo)
console.log(empObj.empCity)
//iterate
    //for-in loop
    for(let v in empObj)
    {
        console.log(empObj[v]) //[v] is value , only v gives undefined
    }

