/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
 let user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
let copyOfUser={...user};//shallow copy
//name in the copied object 
copyOfUser.name="Mahi"
//preferences
copyOfUser.preferences.theme = "light";

//  Log both objects
console.log("Original User:", user);
console.log("Copied User:", copyOfUser);

