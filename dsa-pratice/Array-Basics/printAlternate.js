// Input: num = [1, 2, 3, 5, 6]
// Output: [1, 3, 6]

function printAlternateIncrement(arr) {
  const altArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    altArr.push(arr[i]);
  }
  console.log("printAlternate", altArr);
}

function printAlternateByEvenIndex(arr) {
  const altArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (i % 2 === 0) {
      altArr.push(arr[i]);
    }
  }
  console.log("printAlternateByEvenIndex", altArr);
}

const num = [1, 2, 3, 5, 6];
printAlternateIncrement(num);
printAlternateByEvenIndex(num);
