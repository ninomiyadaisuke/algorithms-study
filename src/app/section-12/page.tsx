"use client";

export default function Page() {
  // selection sort https://visualgo.net/en/sorting

  function selectionSort(arr: any[]) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }

      if (i !== lowest) {
        // console.log("*******************");
        // console.log(arr, lowest);
        // console.log("Swapping to:");
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        // console.log(arr);
        // console.log("*******************");
      }
    }
    return arr;
  }

  console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

  return <div></div>;
}
