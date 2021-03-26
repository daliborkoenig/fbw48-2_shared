// 1
function capitalize(string) {
  string = string.slice(0,1).toUpperCase() + string.slice(1)
  console.log(string);
}

capitalize('what a beautiful day')

// 2
function longestWord(string){
  let arr = string.split(' ')
  let longestWord = ''
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > longestWord.length){
      longestWord = arr[i]
    }
  }
  return(longestWord);
}

console.log(longestWord('what a beautiful day'))

// 3
function longestCountryName(array){
  let longestName = ''
  for (i=0; i < array.length; i++){
    if (array[i].length > longestName.length){
      longestName = array[i]
    }
  }
  return(longestName);
}

console.log(longestCountryName(["Australia","Germany","United States of America"]));

