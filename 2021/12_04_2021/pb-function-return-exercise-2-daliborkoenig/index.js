// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  let chars = str1.split("")
  let vowel = 0
  for(i = 0 ; i < chars.length ; i++){
    if (chars[i].toLowerCase() == `a` || chars[i].toLowerCase() == `e` || chars[i].toLowerCase() == `i` || chars[i].toLowerCase() == `o` || chars[i].toLowerCase() == `u`){
      vowel = vowel + 1
    }
  }
  return vowel
}
console.log(`1==> ${vowel_count("The quick brown fox")}`);

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  let randomString = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
  let randomChars = randomString.split("")
  let randomWord = ""
  for(i = 0 ; i < l ; i++){
    randomWord += randomChars[Math.floor(Math.round(Math.random()*randomChars.length))]
  }
  return randomWord
}
console.log(`2==> ${makeid(8)}`);

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {
  console.log(`3==> ${arguments.callee.name}`);
}
abc();
