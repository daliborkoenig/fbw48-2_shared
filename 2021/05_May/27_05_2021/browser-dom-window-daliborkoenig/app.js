// let randomNum = Math.ceil(Math.random()*10)
// console.log(randomNum);
// const plGuess = window.prompt("Guess a number between 1 - 10")

// console.log(plGuess);
let plGuess = window.prompt("Guess a number between 1 - 10")
let attempt = 0
let randomNum = Math.ceil(Math.random()*10)

function guessingGame(num){
  attempt++
  if(randomNum == num){
    // attempt++
    alert(`Success, the number was ${randomNum}! Attempts: ${attempt}`)
  }
  else if(randomNum != num && attempt < 3){
    // attempt++
    plGuess = window.prompt("Wrong!!! Try Again!")
    guessingGame(plGuess)
  }
  else{
    alert(`Sorry, you failed to guess the number in three attempts. the number was ${randomNum}`)
  }
}

guessingGame(plGuess)
