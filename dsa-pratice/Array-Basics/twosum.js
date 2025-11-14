function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log([arr[i], arr[j]]);
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}

arr = [2, 7, 11, 15], target = 9;
twoSum(arr, target);
