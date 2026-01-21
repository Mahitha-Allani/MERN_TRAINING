//Array
let skills = ['html', 'css', 'javascript'];
let [skill1, skill2, skill3] = skills;
console.log(skill2);

//INSERTING ELEMENTS

//Inserting at start
skills.unshift('sql');
console.log(skills);
//Inserting at end
skills.push('python');
console.log(skills);
//Inserting at specific position(splice(index, deleteCount, item1, item2, ...))
skills.splice(2, 0, 'angular');
console.log(skills);

//DELETING ELEMENTS

//Removing from start
skills.shift();
console.log(skills);
//Removing from end
skills.pop();
console.log(skills);
//Removing from specific position
skills.splice(2, 1);
console.log(skills);



