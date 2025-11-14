
// find max element in an array 
// 
function maxElement(arr) {
  let max = arr[0];
  if (arr.length === 0) return
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  console.log("max element is:", max)
}


const arr = [3, 4, 1, 5, 2, 5, 1, 10]
maxElement(arr)
