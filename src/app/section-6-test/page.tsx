"use client";

export default function Page() {
  // Frequency Counter - sameFrequency
  // Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

  // Your solution MUST have the following complexities:

  // Time: O(N)

  // Sample Input:

  // sameFrequency(182,281) // true
  // sameFrequency(34,14) // false
  // sameFrequency(3589578, 5879385) // true
  // sameFrequency(22,222) // false

  function sameFrequency(num1: number, num2: number) {
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

  function areThereDuplicates1(...args: any[]): boolean {
    let collection: { [key: string]: number } = {};
    for (let val of args) {
      collection[val] = (collection[val] || 0) + 1;
    }
    // console.log(collection);

    for (let key in collection) {
      if (collection[key] > 1) return true;
    }
    return false;
  }

  // console.log(areThereDuplicates1(1, 6, 2, 3));

  function areThereDuplicates2(...args: any[]) {
    args.sort((a, b) => a - b);

    let start = 0;
    let next = 1;
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
  }
  // areThereDuplicates2(1, 6, 2, 2, 3);
  // console.log(areThereDuplicates2(1, 6, 2, 2, 3));

  function areThereDuplicates3(...args: any[]) {
    const test = new Set(args).size;
    // console.log(test);

    return new Set(args).size !== args.length;
  }
  // console.log(areThereDuplicates3(1, 6, 2, 3));

  //averagePair という関数を書け。整数のソートされた配列と目標とする平均値が与えられたとき、配列中にその平均値が目標とする平均値と等しい値の組があるかどうかを判定します。目標平均に一致する組は1組だけではないかもしれない。

  // averagePair([1, 2, 3], 2.5); // true
  // averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
  // averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
  // averagePair([], 4); // false

  function averagePair(arr: any[], num: number) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      let avg = arr[start] + arr[end] / 2;
      if (avg === num) return true;
      if (avg < num) {
        start++;
      } else {
        end--;
      }
    }
    return false;
  }
  // console.log(averagePair([1, 2, 3], 2.5));

  // for文でネストするパターン

  function averagePair1(arr: any[], num: number): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let avg = (arr[i] + arr[j]) / 2;
        if (avg === num) {
          return true;
        }
      }
    }
    return false;
  }

  // console.log(averagePair1([-1, 0, 3, 4, 5, 6], 4.1));

  // 多重ポインタ - isSubsequence
  // 2つの文字列を受け取り、最初の文字列の文字が2番目の文字列の文字の部分列を形成しているかどうかをチェックするisSubsequenceという関数を書いてください。言い換えると、この関数は、最初の文字列の文字が、順序を変えずに2番目の文字列のどこかに現れるかどうかをチェックしなければならない。

  // isSubsequence("hello", "hello world"); // true
  // isSubsequence("sing", "sting"); // true
  // isSubsequence("abc", "abracadabra"); // true
  // isSubsequence("abc", "acb"); // false (order matters)

  function isSubsequence(str1: string, str2: string): boolean {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

  // tngs str1
  // i
  // string str2
  // j
  // console.log(isSubsequence("tng", "sting"));

  // isSubsequence Solution - Recursive but not O(1) Space

  function isSubsequence2(str1: string, str2: string): boolean {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0])
      return isSubsequence2(str1.slice(1), str2.slice(1));
    return isSubsequence2(str1, str2.slice(1));
  }

  // console.log(isSubsequence2("tng", "sting"));

  // スライディングウィンドウ - maxSubarraySum
  // 整数の配列と数値が与えられたとき、関数に渡された数値の長さを持つ部分配列の最大和を求める関数 maxSubarraySum を書きなさい。

  // 部分配列は元の配列から連続した要素で構成されなければならないことに注意。下の最初の例では、[100, 200, 300]は元の配列の部分配列であるが、[100, 300]は部分配列ではない。

  // maxSubarraySum([100, 200, 300, 400], 2); // 700
  // maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
  // maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
  // maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
  // maxSubarraySum([2, 3], 3); // null

  function maxSubarraySum(arr: any[], num: number): number | null {
    if (arr.length < num) return null;
    let total = 0;
    for (let i = 0; i < num; i++) {
      total += arr[i];
    }

    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
      currentTotal += arr[i] - arr[i - num];
      total = Math.max(total, currentTotal);
    }
    return total;
  }
  // console.log("======>>>>", maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

  // スライディングウィンドウ - minSubArrayLen
  // 2つのパラメータ（正の整数の配列と正の整数）を受け取るminSubArrayLenという関数を書きなさい。

  // この関数は、和が関数に渡された整数以上である連続した部分配列の最小の長さを返すべきである。存在しない場合は、代わりに0を返す。

  // minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
  // minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
  // minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
  // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
  // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
  // minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
  // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

  function minSubArrayLen(nums: number[], sum: number): number {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
      // if current window doesn't add up to the given sum then
      // move the window to right
      if (total < sum && end < nums.length) {
        total += nums[end];
        // １回目のendは1
        // ２回目はendは2 totalは5
        // ...6回目     total55
        end++;
      }
      // if current window adds up to at least the sum given then
      // we can shrink the window
      else if (total >= sum) {
        minLen = Math.min(minLen, end - start);
        total -= nums[start];
        start++;
      }
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
      else {
        break;
      }
    }

    return minLen === Infinity ? 0 : minLen;
  }

  // console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));

  //   スライディング・ウィンドウ - findLongestSubstring
  // 文字列を受け取り、すべての異なる文字を含む最も長い部分文字列の長さを返す findLongestSubstring という関数を書いてください。

  // findLongestSubstring(""); // 0
  // findLongestSubstring("rithmschool"); // 7
  // findLongestSubstring("thisisawesome"); // 6
  // findLongestSubstring("thecatinthehat"); // 7
  // findLongestSubstring("bbbbbb"); // 1
  // findLongestSubstring("longestsubstring"); // 8
  // findLongestSubstring("thisishowwedoit"); // 6

  function findLongestSubstring(str: string) {
    let longest = 0;
    let seen = {} as Record<string, number>;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

  console.log(findLongestSubstring("rimmmschtd"));

  return <div></div>;
}
