let array = [];
for (let i = 1; i <= 100; i++) {
  array.push(i);
}
// console.log(array);

//set key
localStorage.setItem('numbers', array);

//get key
console.log(localStorage.getItem('numbers'));
