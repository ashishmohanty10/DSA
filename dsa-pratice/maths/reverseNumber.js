// reverse a number 

function reverseANumber(num) {
  let revNum = 0;

  while (num > 0) {
    // if I do pecentile  we get the last number;

    let digit = num % 10  // this gets the last digit now I need to store it 
    revNum = revNum * 10 + digit
    num = Math.floor(num / 10)
  }
  return revNum
}

console.log(reverseANumber(435))
