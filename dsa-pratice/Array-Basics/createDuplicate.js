// Input: nums = [4, 8, 15, 16, 23, 42]
// Output: [4, 8, 15, 16, 23, 42]

function createDuplicate(arr) {
  const duplicateArr = [];
  for (let i = 0; i < arr.length; i++) {
    duplicateArr.push(arr[i]);
  }
  console.log("duplicate arr", duplicateArr);
}

num = [4, 8, 15, 16, 23, 42];
createDuplicate(num);
