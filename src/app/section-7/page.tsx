"use client";

export default function Page() {
  // function countDown(num?: number) {
  //   if (!num) return
  //   if (num <= 0) {
  //     console.log("All done");
  //     return;
  //   }
  //   console.log(num);
  //   num--;
  //   countDown(num);
  // }

  // function countDown(num:number) {
  //   for(let i = num; i > 0; i--) {
  //     console.log(i);
  //   }
  //   console.log("All done");
  // }
  //  countDown(3)

  // function sumRange(num: number): number {
  //   console.log(num);

  //   if (num === 1) return 1;
  //   return num + sumRange(num - 1);
  // }
  // console.log(sumRange(4));
  // sumRange(4);

  // sumRange(3)
  //     return 3 + sumRange(2)
  //                  return 2 + sumRange(1)
  //                                   return 1

  //   function factorial(num: number) {
  //     let total = 1;
  //     for (let i = num; i > 1; i--) {
  //       total *= i;
  //     }
  //     return total;
  //   }
  // console.log(factorial(4));

  // function factorial(num: number): number {
  //   if (num === 1) return 1;
  //   return num * factorial(num - 1);
  // }

  // console.log(factorial(5));

  // function collectOddValues(arr: any[]): any[] {
  //   let result: any[] = [];
  //   function helper(helperInput: any[]) {
  //     if (helperInput.length === 0) return;
  //     if (helperInput[0] % 2 !== 0) {
  //       result.push(helperInput[0]);
  //     }
  //     helper(helperInput.slice(1));
  //   }
  //   helper(arr);
  //   return result;
  // }

  // function collectOddValues(arr: any[]): any[] {
  //   let newArr: any[] = [];
  //   if (arr.length === 0) {
  //     return newArr;
  //   }
  //   if (arr[0] % 2 !== 0) {
  //     newArr.push(arr[0]);
  //   }
  //   newArr = newArr.concat(collectOddValues(arr.slice(1)));
  //   return newArr;
  // }

  // collectOddValues([1, 2, 3, 4, 5])
  //  [1].concat(collectOddValues([2, 3, 4, 5]))
  //               [].concat(collectOddValues([3, 4, 5]))
  //                             [3].concat(collectOddValues([4, 5]))
  //                                       [].concat(collectOddValues([5]))
  //                                                  [5].concat(collectOddValues([]))
  // console.log(collectOddValues([1, 2, 3, 4, 5]));

  return <div></div>;
}
