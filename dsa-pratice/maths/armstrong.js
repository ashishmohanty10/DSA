// check whether a number is Armstrong
//
//
function checkArmstrong(num) {
  let originalNumber = num;

  // total number of digits 
  const digits = num.toString().length
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits)

    num = Math.floor(num / 10)
  }

  if (sum === originalNumber) {
    console.log(originalNumber, ":This is an armstrong number")
  } else {
    console.log(originalNumber, ":No its not an armstrong number")
  }
}

checkArmstrong(153)
checkArmstrong(123)
