"use client";

export default function Page() {
  // function numberCompare(num1: number, num2: number) {
  //   return num1 - num2;
  // }

  // console.log([23, 45, 6, 12, 13].sort(numberCompare));

  // function compareByLen(str1:string,str2:string) {
  //   return str1.length - str2.length
  // }

  // console.log(["test","testtest","testt"].sort(compareByLen));

  // Bubble Sort
  // 余計なループが入る
  // function bubbleSort(arr: any[]): any[] {
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       console.log(arr, arr[j], arr[j + 1]);

  //       if (arr[j] > arr[j + 1]) {
  //         // SWAP
  //         let temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //       }
  //     }
  //   }
  //   return arr;
  // }

  // console.log(bubbleSort([37, 45, 29, 8,12,88,-3]));

  // function bubbleSort2(arr: any[]): any[] {
  //   for (let i = arr.length; i > 0; i--) {
  //     for (let j = 0; j < i - 1; j++) {
  //       console.log(arr, arr[j], arr[j + 1]);

  //       if (arr[j] > arr[j + 1]) {
  //         // SWAP
  //         let temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //       }
  //     }
  //     console.log("one pass complete");
  //   }
  //   return arr;
  // }
  // console.log(bubbleSort2([37, 45, 29, 8, 12, 88, -3]));

  // function bubbleSort3(arr: any[]): any[] {
  //   const swap = (arr: any[], idx1: number, idx2: number) => {
  //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  //   };
  //   for (let i = arr.length; i > 0; i--) {
  //     for (let j = 0; j < i - 1; j++) {
  //       console.log(arr, arr[j], arr[j + 1]);

  //       if (arr[j] > arr[j + 1]) {
  //         swap(arr, j, j + 1);
  //       }
  //     }
  //     console.log("one pass complete");
  //   }
  //   return arr;
  // }

  // console.log(bubbleSort2([37, 45, 29, 8, 12, 88, -3]));
  // [37, 45, 29, 8]
  // [37, 29, 8, 45] ループ１回目
  // [29, 8, 37,45] ループ2回目
  // [8,29, 37,45] ループ3回目

  // ほぼソートが終わっている場合のバブルソート
  function bubbleSort4(arr: any[]): any[] {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
          // SWAP
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    return arr;
  }

  console.log(bubbleSort4([8, 1, 2, 3, 4, 5, 6, 7]));

  return <div></div>;
}
