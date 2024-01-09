"use client";

export default function Page() {
  // function power(num1: number, num2: number): number {
  //   if (num2 === 0) return 1;
  //   return num1 * power(num1, num2 - 1);
  // }
  // console.log(power(3, 6));

  // function factorial(num: number): number {
  //   if(num < 0) return 0
  //   if (num <= 1) return num;
  //   return num * factorial(num - 1);
  // }

  // console.log(factorial(7));

  // function productOfArray(numArr: any[]): number {
  //   if (numArr.length === 0) {
  //     return 1
  //   }
  //   return numArr[0] * productOfArray(numArr.slice(1));
  // }

  // console.log(productOfArray([1, 2, 3, 10]));

  // function recursiveRange(num: number): number {
  //   if (num === 0) return 0;
  //   return num + recursiveRange(num - 1);
  // }

  // console.log(recursiveRange(10));

  // function fib(num: number): number {
  //   if (num <= 2) return 1;
  //   return fib(num - 1) + fib(num - 2);
  // }

  // console.log(fib(6));

  // fib(n) = fib(n-1) + fib(n-2)
  // fib(5) = fib(4) + fib(3) = 5 = 3 + 2
  // fib(4) = fib(3) + fib(2) = 3
  // fib(3) = fib(2) + fib(1) = 2
  // fib(2) = fib(1) + fib(1) = 1

  // function fibFor(num: number): number {
  //   if (num <= 2) return 1;
  //   let a = 1;
  //   let b = 1;
  //   for (let i = 3; i <= num; i++) {
  //     let c = a + b;
  //     a = b;
  //     b = c;
  //   }
  //   return b;
  // }

  // 初期状態：a = 1, b = 1。
  // i = 3 の場合：c = a + b → c = 1 + 1 = 2。
  // 新しい a = 1 (以前の b), 新しい b = 2 (計算された c)
  // i = 4 の場合:c = a + b → c = 1 + 2 = 3
  // 新しい a = 2 (以前の b), 新しい b = 3 (計算された c)。
  // i = 5 の場合： c = a + b → c = 2 + 3 = 5。
  // 新しい a = 3 (以前の b), 新しい b = 5 (計算された c)。
  // console.log(fibFor(5));

  return <div></div>;
}
