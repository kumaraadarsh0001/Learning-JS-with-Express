var arr = new Array();
for (i = 1; i < 11; i++) {
  console.log(2 + "x" + i + "=" + 2 * i);
  arr.push(2 * i);
}
sum = 0;
for (val in arr) {
  //   console.log(arr[val]);
  sum += arr[val];
}
console.log(sum);
