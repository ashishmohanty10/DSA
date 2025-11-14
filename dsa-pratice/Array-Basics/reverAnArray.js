// Input: num = [1, 2, 3, 5, 6]
// Output: [6, 5, 3, 2, 1]

// Input: num = [1, 2, 9, 5, 6, 7, 8, 2, 3]
// Output: [3, 2, 8, 7, 6, 5, 9, 2, 1]

function reverseArr(arr) {
  const revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  console.log(revArr);
}

const num = [1, 2, 3, 5, 6];
reverseArr(num);
