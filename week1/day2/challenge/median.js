function medianOfSortedArrays(nums1, nums2) {
  var nums = nums1.concat(nums2);

  function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat([pivot], quickSort(right));
  }
  nums = quickSort(nums);

  var numLength = nums.length;

  if (numLength % 2 == 0) {
    let len = numLength / 2;
    return (nums[len - 1] + nums[len]) / 2;
  } else {
    let len1 = (numLength / 2) - 0.5;
    return nums[len1];
  }

};

nums1 = [1, 3]
nums2 = [2]

console.log(medianOfSortedArrays(nums1, nums2));
