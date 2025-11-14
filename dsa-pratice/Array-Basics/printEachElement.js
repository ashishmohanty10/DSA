// Input: nums = [1, 2, 3, 5, 6]
// Output:
// Value at Index 0 is 1
// Value at Index 1 is 2
// Value at Index 2 is 3
// Value at Index 3 is 5
// Value at Index 4 is 6

function printEachElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Value at Index ${i} is ${arr[i]}`);
  }
}

const num = [1, 2, 3, 5, 6];
printEachElement(num);
