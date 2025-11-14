// deletion at Xth Position
//
//


function deleteElementAtIndex(nums, n, X) {
  for (let i = X; i < n - 1; i++) {
    nums[i] = nums[i + 1];
  }

  return n - 1;
}

let nums = [10, 20, 30, 40, 50, 60];
let n = nums.length;
let X = 2;

let newSize = deleteElementAtIndex(nums, n, X);

console.log("New size:", newSize);
console.log("Updated array:", nums);
