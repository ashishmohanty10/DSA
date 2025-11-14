// Input: num = [1, 2, 3, 4]
// Output:
// Sum: 10
// Product: 24

let num = [1, 2, 3, 4];

function calculateSumAndProduct(num) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];

    product *= num[i];
  }

  console.log("Sum:", sum);
  console.log("Product:", product);
}

calculateSumAndProduct(num);
