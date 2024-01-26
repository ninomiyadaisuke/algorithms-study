"use client";

export default function Page() {
  // 指定した桁の数字を取得する
  function getDigit(num: number, place: number) {
    //abs = 絶対値
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  // console.log(getDigit(7323, 2));
  // 7323 / 100 = 73.23 → 73 floor
  // 73 % 10 = 3

  // 数字が何桁あるか確かめる関数
  function digitCount(num: number) {
    if (num === 0) return 1;
    // Math.log10(Math.abs(num))　＝ 10に何乗すれば入力した数になるか確かめる
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  // console.log(digitCount(423));

  // 配列の最大桁数を取得する

  function mostDigits(nums: number[]) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  // console.log(mostDigits([23, 567, 89, 12234324, 90]));

  function radixSort(nums: number[]) {
    // 最大桁数を取得
    let maxDigitCount = mostDigits(nums);
    // console.log(maxDigitCount);
    for (let k = 0; k < maxDigitCount; k++) {
      // 10桁の配列を作成
      let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        let digit = getDigit(nums[i], k);
        // 10桁の配列に入れる
        digitBuckets[digit].push(nums[i]);
      }
      console.log(digitBuckets);

      nums = ([] as number[]).concat(...digitBuckets);
      console.log(nums);
    }

    return nums;
  }
  radixSort([23, 345, 5467, 12, 2345, 9852]);
  return <div></div>;
}
