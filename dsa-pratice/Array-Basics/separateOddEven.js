// Input: num = [4, 8, 15, 16, 23, 42]
// Output:
// Odd elements: [15, 23]
// Even elements: [4, 8, 16, 42]

function separateOddEven(arr) {
  const odd = [];
  const even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log("odd ---", odd);
  console.log("even ---", even);
}

num = [4, 8, 15, 16, 23, 42];
separateOddEven(num);
