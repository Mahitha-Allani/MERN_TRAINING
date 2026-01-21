/*WRITE A FUNCTION THAT RECEIVES "SKILLS" ARRAY AND "skillNmae" AS ARGUMENTS AND RETURN THE INDEX
IF "skillName" EXISTED,OTHERWISE "skill not found" */


function findSkillIndex(skills, skillName)
{
    for (let i = 0; i < skills.length; i++) 
    {
        if (skills[i] === skillName)
        {
            return i; 
        }
    }
    return "Skill not found"; 
}
let skills = ["HTML", "CSS", "JavaScript", "React"];
console.log(findSkillIndex(skills, "JavaScript")); 
console.log(findSkillIndex(skills, "Python"));     
