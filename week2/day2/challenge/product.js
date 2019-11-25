function productOfIntegers(num1, num2) {

  if (num1 == 0 || num2 == 0) {
    return "0";

  }

  let result = new Array(num1.length + num2.length);
  result.fill(0);
  let k = result.length - 1
  for (i = num1.length - 1; i >= 0; i--) {
    let z = k;
    for (j = num2.length - 1; j >= 0; j--) {

      result[z] += num1[i] * num2[j];
      result[z - 1] += Math.floor(result[z] / 10);
      result[z] = result[z] % 10;
      z--;

    }
    k--;
  }
  //console.log(result)
  if (!result[0]) {
    result.splice(0, 1)
  }

  return result.join("");

}

productOfIntegers("122", "13");
