function greetMessage(str){
  console.log(`Good Morning, ${str}`);
}
function greetUsers(arr, greetMessage){
  for(user in arr){
    greetMessage(arr[user])
  }
}
greetMessage("John") // print "Good Morning, John"
greetUsers(["John","Peter","Mark"], greetMessage)
// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"
