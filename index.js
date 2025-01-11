const arr = [1, 2, 3, 4, 5];

const newarr = arr.map((num) => {
  return num + 10;
});
console.log(newarr);

const myNewArr = arr.filter((num) => {
  return num > 3;
});

console.log(myNewArr);
console.log(arr);
