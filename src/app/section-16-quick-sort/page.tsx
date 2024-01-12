"use client";

export default function Page() {
  function pivot(arr: any[], start = 0, end = arr.length + 1) {
    function swap(array: any[], i: number, j: number) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length + 1; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
  }

  // console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
  // pivot([4, 8, 2, 1, 5, 7, 6, 3]);
  // [4, 8, 2, 1, 5, 7, 6, 3] 4と8を比較 4 < 8なのでキープ
  // [4, 2, 8, 1, 5, 7, 6, 3] 4と2を比較 4 > 2なので交換
  // [4, 2, 1, 8, 5, 7, 6, 3] 4と1を比較 4 > 1なので交換
  // [4, 2, 1, 3, 5, 7, 6, 8] 4と3を比較 4 > 3なので交換

  // [3, 2, 1, 4, 5, 7, 6, 8] 4をswapIdxに移動

  function quickSort(
    arr: any[],
    left: number = 0,
    right: number = arr.length - 1
  ) {
    if (left < right) {
      let pivotIdx = pivot(arr, left, right); // 3
      console.log(pivotIdx);

      // left
      quickSort(arr, left, pivotIdx - 1);
      // right
      quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
  }

  console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

  return <div></div>;
}
