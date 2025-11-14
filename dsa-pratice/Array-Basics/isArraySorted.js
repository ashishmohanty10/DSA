// Input: nums = [1, 2, 3, 4, 5]
// Output: Sorted in Forward Order
// Explanation: The array [1, 2, 3, 4, 5] is in ascending order, meaning it is sorted in forward order.

// Input: nums = [5, 4, 3, 2, 1]
// Output: Sorted in Backward Order
// Explanation: The array [5, 4, 3, 2, 1] is in descending order, meaning it is sorted in backward order.

// Input: nums = [3, 1, 4, 2, 5]
// Output: Not Sorted
// Explanation: The array [3, 1, 4, 2, 5] is neither in ascending nor descending order, so it is not sorted.

function isSorted(arr) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isAscending = false;
    }
    if (arr[i] < arr[i + 1]) {
      isDescending = false;
    }
  }

  if (isAscending) {
    console.log("Sorted in Forward Order");
  } else if (isDescending) {
    console.log("Sorted in Backward Order");
  } else {
    console.log("Not Sorted");
  }
}

num1 = [1, 2, 3, 4, 5];
num2 = [5, 4, 3, 2, 1];
num3 = [3, 1, 4, 2, 5];

isSorted(num1);
isSorted(num2);
isSorted(num3);
