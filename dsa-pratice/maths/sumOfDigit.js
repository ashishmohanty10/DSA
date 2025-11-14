// sum of digits of a number
//
//


function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit

    num = Math.floor(num / 10)
  }
  console.log(sum)
}

let num = 687
sumOfDigits(num)
