// check if the number is palindrome or not


function checkPalindrome(num) {
  let originalNum = num
  let revNum = 0;

  while (num > 0) {
    let digit = num % 10;
    revNum = revNum * 10 + digit;

    num = Math.floor(num / 10)
  }
  console.log(revNum)
  if (revNum === originalNum) {
    console.log("the number is a palidrom")
  } else {
    console.log("the number is not a palindrom")
  }
  return revNum
}


checkPalindrome(121)
checkPalindrome(123)
