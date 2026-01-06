/*HANDS ON 1: Smart Login Status Engine
        Intial Data:
            let isLoggedIn=true;
            let isProfileComplete=false;
        Tasks:
            1.If user is not logged in = show "please login"
            2.If logged in but profile incomplete =  show "complete your profile"
            3.If logged in and profile complete = show "Welcome back"
            4.Store the result in a message
            5.Print the message
*/
let isLoggedIn = true;
let isProfileComplete = false;
let message;
if (!isLoggedIn) 
{
    message = "Please login";
} 
else if (isLoggedIn && !isProfileComplete) 
{
    message = "Complete your profile";
} 
else
{
    message = "Welcome back";
}
console.log(message);

