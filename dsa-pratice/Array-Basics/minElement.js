// find minimum element in an array
//
//

function minElement(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  console.log("min element is:", min)
}


const arr = [3, 7, 11, 2, 1, 10]

minElement(arr)
