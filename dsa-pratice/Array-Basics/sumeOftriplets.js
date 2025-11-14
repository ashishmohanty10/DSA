function sumOfTriplets(arr, target) {
  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        result.push([arr[i], arr[left], arr[right]]);

        // Skip duplicates
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result.length > 0 ? result : -1;
}

(num = [2, 7, 11, 15, 12, 10]), (target = 24);
sumOfTriplets(num, target);
