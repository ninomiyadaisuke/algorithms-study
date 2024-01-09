// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

export function sameFrequency(num1: number, num2: number) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {} as Record<string, number>;
  let countNum2 = {} as Record<string, number>;

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    // console.log(countNum2[strNum2[j]]);
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }
  // console.log(countNum2);
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
  return true;
}
// console.log(sameFrequency(182, 281));
sameFrequency(122, 221);


// areThereDuplicates という関数を実装します。この関数は可変数の引数を受け取り、渡された引数に重複があるかどうかをチェックします。これは、周波数カウンタ パターンまたは複数のポインタ パターンを使用して解決できます。

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

export function areThereDuplicates1() {
  let collection = {} as any
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}

export function areThereDuplicates2(...args: any[]) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  console.log(args);
  
}