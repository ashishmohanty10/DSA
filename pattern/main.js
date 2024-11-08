//  * * * *
//  * * * *
//  * * * *
//  * * * *

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
pattern1(5);

//  *
//  * *
//  * * *
//  * * * *

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
pattern2(5);

// 1
// 1 2
// 1 2 3 4
// 1 2 3 4 5

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

pattern3(5);

//  1
//  2 2
//  3 3 3
//  4 4 4 4

function pattern4(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

pattern4(5);

// * * * *
// * * *
// * *
// *

function pattern5(n) {
  for (let i = n; i >= 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

pattern5(5);

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern6(n) {
  for (let i = n; i >= 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

pattern6(7);

//     *
//   * * *
//  * * * * *
// * * * * * * *
