// find second max number in an array
//
//
function secondMax(arr) {
  let maxElement = -Infinity;
  let secondMaxElement = -Infinity;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      secondMaxElement = maxElement;
      maxElement = arr[i]
    } else if (arr[i] > secondMaxElement && arr[i] < maxElement) {
      secondMaxElement = arr[i]
    }
  }

  if (secondMaxElement === -Infinity) {
    console.log(-1)
  } else {
    console.log(secondMaxElement)
  }
}

const arr = [3, 7, 11, 2, 1, 10]
secondMax(arr)
