const array = [1, 2, 3, 4, 5, 6]

function sum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  else {
    return arr.shift() + sum(arr);
  }
};

console.log(sum(array))  // return 21
