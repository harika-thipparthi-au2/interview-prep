//Higher-Order function is a function that receives a function as an argument or returns the function as output.

var arr1 = [1, 2, 3, 4, 5];
var arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);
