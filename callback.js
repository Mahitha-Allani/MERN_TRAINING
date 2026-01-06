//callback function
function test1(a)
{
    console.log(a())
}
//here,anonymous function is called as callback function
//anonymous function is called by test1 function
test1(function(){
    return 123;
})