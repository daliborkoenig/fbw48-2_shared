const string="hello world"

function reverse2(str){
  return str.split("").reverse().join("")
}

function reverse(str){
  if(str.charAt(0) === ''){
    return "";
  }
  return str.charAt(str.length -1) + reverse(str.substring(0,str.length-1));
}

console.log(reverse2(string));
console.log(reverse(string))  // return dlrow olleh