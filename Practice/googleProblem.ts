// problem from Youtube video: https://www.youtube.com/watch?v=XKu_SEDAykw&ab_channel=LifeatGoogle

// input: collection of numbers
// input: sum
// find matching pair that is equal to a sum

// sample input: [1,2,3,9], 8
// sample input: [1,2,4,4], 8

// only a single array
// can I use the same input twice? (can 1 be summed with itself?) NO
// do I need to return the pair, or just a boolean? BOOL IS FINE

// input is in-mem array, and is ordered
// negatives can happen

// brute force soln is a nested for loop
// not optimal bc O(n^2)

const arr1: Array<number> = [1, 2, 3, 9];
const arr2: Array<number> = [1, 2, 4, 4];

const bruteFindPairSum = (arr: Array<number>, sum: number): boolean => {
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length; j++) {
      if (j !== i) {
        if (arr[i] + arr[j] === sum) {
          return true;
        }
      }
    }
  }
  return false;
};

const twoItersFindPairSum = (arr: Array<number>, sum: number): boolean => {
  if (!arr || arr.length === 0 || arr.length === 1) {
    return false;
  }
  let low: number = 0;
  let high: number = arr.length - 1;
  while (low < high) {
    if (arr[low] + arr[high] === 8) {
      return true;
    } else if (arr[low] + arr[high] > 8) {
      --high;
    } else {
      ++low;
    }
  }
  return false;
};

// console.log(bruteFindPairSum(arr1, 8));
// console.log(bruteFindPairSum(arr2, 8));

// console.log(twoItersFindPairSum(arr1, 8));
// console.log(twoItersFindPairSum(arr2, 8));

// loop through the array and add the difference of the sum and current element to a hash table / js object o(n) time and space
// before adding to the obj, check if that number exists in our object; if yes, return true; if no, add and keep going
// sets are also viable

const nonorderedFindPairSum = (arr: Array<number>, sum: number): boolean => {
  if (!arr || arr.length === 0 || arr.length === 1) {
    return false;
  }
  //   const map: any = {};
  //   arr.forEach((item) => {
  //     console.log(map);
  //     if (map[item]) {
  //       return true;
  //     } else {
  //       map[sum - item] = true;
  //     }
  //   });
  //   return false;

  const differenceSet: Set<number> = new Set();
  for (let i: number = 0; i < arr.length; ++i) {
    if (differenceSet.has(arr[i])) {
      return true;
    }
    differenceSet.add(sum - arr[i]);
  }
  return false;
};

console.log(nonorderedFindPairSum(arr1, 8));
console.log(nonorderedFindPairSum(arr2, 8));
