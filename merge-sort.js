function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;
  // split array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // sort left half
  left = mergeSort(left);

  // sort right half
  right = mergeSort(right);

  // merge sorted halves
  return merge(left, right);

  function merge(left, right) {
    let merged = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    }

    return merged.concat(left, right);
  }
}

let res1 = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
let res2 = mergeSort([105, 79, 100, 110]);
console.log(res1);
console.log(res2);
