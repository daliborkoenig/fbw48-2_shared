let teamOneScores = [89, 120, 103]
let teamTwoScores = [116, 94, 123]
// teamTwoScores.push(150)   //1c comment this out to see difference 

// 1a
let teamOneAvg = (teamOneScores[0] + teamOneScores[1] + teamOneScores[2])/teamOneScores.length
let teamTwoAvg = (teamTwoScores[0] + teamTwoScores[1] + teamTwoScores[2])/teamTwoScores.length

let differenceOne = teamOneAvg - teamTwoAvg
let differenceTwo = teamTwoAvg - teamOneAvg

// 1b
if (teamOneAvg > teamTwoAvg){
  console.log(`Aleeza's team wins with an average of ${teamOneAvg} points which is better than Lis's team's average by ${differenceOne} points`);
}
else if (teamTwoAvg > teamOneAvg){
  console.log(`Lis's team wins with an average of ${teamTwoAvg} points which is better than Aleeza's team's average by ${differenceTwo} points`);
}
else {
  console.log(`The average results are tied.`);
}

// 1c see line 3

// 1d 

let teamThreeScores = [97, 134, 105]
let teamThreeAvg = (teamThreeScores[0] + teamThreeScores[1] + teamThreeScores[2])/teamThreeScores.length

if (teamOneAvg > teamTwoAvg && teamOneAvg > teamThreeAvg){
  console.log(`Aleeza's team wins with an average of ${teamOneAvg} points`);
}
else if (teamTwoAvg > teamOneAvg && teamTwoAvg > teamThreeAvg){
  console.log(`Lis's team wins with an average of ${teamTwoAvg} points`);
}
else if (teamThreeAvg > teamOneAvg && teamThreeAvg > teamTwoAvg){
  console.log(`Mary's team wins with an average of ${teamThreeAvg} points`);
}
else {
  console.log(`The average results are tied.`);
}