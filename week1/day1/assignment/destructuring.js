//Destructuring an array
const letters = ['h','s','j'];
const [First,Second,Third] = letters;
console.log(Third);

var [a,b,c]=[1,2,3];
console.log(a);

var [a,b,,d]=[1,2,3,4];
console.log(a,b,d)

//Destructuring an object
const person = {
  name: 'Harika',
  age: 24
};
const { name, age } = person;

console.log(name); 
console.log(age); 

const user = { name: 'Harish', age: 34 };
const { name: userName, age: userAge } = user;

console.log(user.name,user.age)
