const array = [1, 2, 3, 4, 5, 6]
function squareNumber(num){
  return Math.pow(num,2)
}
function sqaure(arr, squareNumber){
  let squared = []
  for (num of arr){
    squared.push(squareNumber(num));
  }
  console.log(squared);
}

sqaure(array,squareNumber)  // return [1,4,9,16,25]
