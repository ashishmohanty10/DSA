// find second min number
//
function secondMin(arr) {
  let minElement = Infinity;
  let secondMinElement = Infinity;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minElement) {
      secondMinElement = minElement;
      minElement = arr[i]
    } else if (arr[i] > minElement && arr[i] < secondMinElement) {
      secondMinElement = arr[i]
    }
  }

  if (secondMinElement === Infinity) {
    console.log(-1)
  } else {
    console.log(secondMinElement)
  }

}

const arr = [3, 7, 11, 2, 1, 10]
secondMin(arr)
