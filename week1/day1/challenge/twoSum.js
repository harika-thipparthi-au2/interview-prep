function twoSum(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    key = arr[i];
    obj[key] = i;

  }
  console.log(obj);
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (obj.hasOwnProperty(diff) && obj[key] !== i) {
      return "index1: " + i + "  index2: " + obj[diff];
    }
  }
}
twoSum([2, 7, 11, 15], 9);
