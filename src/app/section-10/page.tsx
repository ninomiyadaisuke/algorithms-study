"use client";

export default function Page() {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const usernames = [
    "SkyWalker42",
    "OceanBreeze21",
    "MountainExplorer",
    "TechWizard88",
    "ArtisticSoul19",
    "NatureLover",
    "HistoryBuff33",
    "MusicMaestro",
    "BookWorm45",
    "ScienceGeek77",
    "TravelGuru22",
    "MovieFanatic",
    "FitnessFreak99",
    "GamerPro5",
    "FoodieChef",
  ] as const;
  // console.log(usernames.indexOf("ArtisticSoul19"));
  // console.log(usernames.includes("ArtisticSoul19"));

  // function linearSearch(arr: any[], num: any) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === num) return i;
  //   }
  //   return -1;
  // }

  // console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));

  // console.log(linearSearch(states,"Maryland"));

  // Binary Search

  // function binarySearch1(arr: number[], elem: number): number {
  //   let start = 0;
  //   let end = arr.length - 1;
  //   let middle = Math.floor(start + end / 2);
  //   while (arr[middle] !== elem && start <= end) {
  //     if (elem <= arr[middle]) {
  //       end = middle - 1;
  //     } else {
  //       start = middle + 1;
  //     }
  //     middle = Math.floor((start + end) / 2);
  //   }
  //   if (arr[middle] === elem) {
  //     return middle;
  //   }
  //   return -1;
  // }
  // console.log(binarySearch1([2, 5, 6, 9, 13, 15, 28, 30], 15));
  // [2, 5, 6, 9, 13, 15, 28, 30]
  //  S        M              E
  // [2, 5, 6, 9, 13, 15, 28, 30]
  //              S   M       E
  // [2, 5, 6, 9, 13, 15, 28, 30]
  //                          SME 詐害している数値がない場合

  // function binarySearch2(arr: number[], elem: number): number {
  //   let start = 0;
  //   let end = arr.length - 1;
  //   let middle = Math.floor((start + end) / 2);
  //   while (arr[middle] !== elem && start <= end) {
  //     if (elem < arr[middle]) end = middle - 1;
  //     else start = middle + 1;
  //     middle = Math.floor((start + end) / 2);
  //   }
  //   return arr[middle] === elem ? middle : -1;
  // }

  // console.log(binarySearch2([2, 5, 6, 9, 13, 15, 28, 30], 15));

  // function naiveSearch(long: string, short: string) {
  //   let count = 0;
  //   for (let i = 0; i < long.length; i++) {
  //     for (let j = 0; j < short.length; j++) {
  //       console.log("short====>>", short[j], "long===>>", long[i + j]);
  //       if (short[j] !== long[i + j]) {
  //         console.log("bleak");
  //         break;
  //       }
  //       if (j === short.length - 1) {
  //         console.log('found one');
          
  //         count++;
  //       }
  //     }
  //   }
  //   return count;
  // }
  // console.log(naiveSearch("lorie loled", "lol"));

  return <div></div>;
}
