//The function statement is not the only way to define a new function; you can define your function dynamically using Function() constructor along with the new operator.


var func = new Function("x", "y", "return x*y;");
function secondFunction() {
  var result;
  result = func(10, 20);
  console.log(result);
}
secondFunction();
