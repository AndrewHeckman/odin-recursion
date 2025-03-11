function fibs(n) {
  let arr = [0, 1];
  
  if (n === 0) return [];
  if (n === 1) return [0];
  
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

function fibsRec(n) {
  let arr = [0, 1];
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return arr;  

  let res = fibsRec(n - 1);
  res.push(res[res.length - 1] + res[res.length - 2]);
  return res;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(8));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(8));