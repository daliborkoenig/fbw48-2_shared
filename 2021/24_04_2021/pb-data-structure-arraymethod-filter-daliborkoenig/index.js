//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1

function filterRange(arr, a, b) {
    //write your code here
    result = arr.filter(function(number){
      return number>=a && number<=b
    })
    return result
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  console.log("filtered", filtered ); // 3,1 (matching values)
  
  console.log("original", arr ); // 5,3,8,1 (not modified)

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
  function filterRangeInPlace(arr, a, b) {
     array = arr.filter(function(number){
       return number>=a && number<=b
     })
  }
  
  let array = [5, 3, 8, 1];
  
  filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4
  
  console.log( array ); // [3, 1]