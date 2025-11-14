// Input: num = [1, 2, 3, 4, 2, 2, 5], target = 2
// Output: Count: 3

function countTarget(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  console.log(count);
}

(num = [1, 2, 3, 4, 2, 2, 5]), (target = 2);
countTarget(num, target);
