function fibonnaci(num){
  if (num == 0) return [0]
  if (num == 1) return [0, 1]
  let arr = fibonnaci(num - 1)
  return [...arr, arr[num-1] + arr[num-2]]
}

console.log(fibonnaci(8)) //  [0, 1, 1, 2, 3, 5, 8, 13,21]






