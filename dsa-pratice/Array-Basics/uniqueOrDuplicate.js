// Input: num = [1, 2, 2, 3, 4, 4, 4, 5]
// Output: Unique Count = 3, Duplicate Count = 3

function checkUniqueOrDuplicate(arr) {
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    frequency[num] = (frequency[num] || 0) + 1;
  }

  let uniqueCount = 0;
  let duplicateCount = 0;

  for (const num in frequency) {
    if (frequency[num] === 1) {
      uniqueCount++;
    } else {
      duplicateCount++;
    }
  }

  console.log(
    `Unique Count = ${uniqueCount}, Duplicate Count = ${duplicateCount}`
  );
  return { uniqueCount, duplicateCount };
}

const num = [1, 2, 2, 3, 4, 4, 4, 5];
checkUniqueOrDuplicate(num);
