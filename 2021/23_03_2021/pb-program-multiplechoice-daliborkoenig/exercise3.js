// 1
let color = 'd'

switch (color){
  case 'red':
    console.log('RED <--|--> BLUE <--|--> GREEN <--|--> YELLOW');
  break;
  case 'blue':
    console.log('BLUE <--|--> GREEN <--|--> YELLOW <--|--> RED');
  break;
  case 'green':
    console.log('GREEN <--|--> YELLOW <--|--> RED <--|--> BLUE');
  break;
  case 'yellow':
    console.log('YELLOW <--|--> RED <--|--> BLUE <--|--> GREEN');
  break;
  default:
    console.log('NOPE <--|--> NOPE <--|--> NOPE <--|--> NOPE');
}

// 2
let grade = 'F'

switch (grade){
  case 'A':
    console.log(`You, fine sir, are a fucking NERD.`);
  break;
  case 'B':
    console.log(`Wow, almost a NERD.`);
  break;
  case 'C':
    console.log(`Enjoy being average.`);
  break;
  case 'D':
    console.log(`Can't even manage average, can we?`);
  break;
  case 'F':
    console.log(`You sir, are a fucking loser.`);
  break;
  default:
    console.log(`Dude, go check Wikipedia for what grades are and then come back.`)
}

// 3
let fruit = 'apple'

switch (fruit){
  case 'banana':
    console.log(`I am not peeling well.`);
  break;
  case 'orange':
    console.log(`Orange you glad to see me?`);
  break;
  case 'strawberry':
    console.log(`Hands up! This is a strobbery.`);
  break;
  case 'apple':
    console.log(`Apple-rently, you have no imagination`);
  break;
  default:
    console.log(`Dude, go check Wikipedia for what fruits are and then come back.`)
}

// 4
let percentageComplete = 10;

if (percentageComplete <= 30){
  console.log(`Still a long way to go`);
}
else if (percentageComplete >= 31 && percentageComplete <= 50){
  console.log(`Slowly getting there`);
}
else if (percentageComplete >= 51 && percentageComplete <= 80){
  console.log(`You can do it!`);
}
else if (percentageComplete >= 81 && percentageComplete <= 99){
  console.log(`This is the last push!`);
}
else if (percentageComplete === 100){
  console.log(`You're there. Well done!`);
}
else {
  console.log(`NOPE`);
}

// 5
// HELPING FRANCESCO TO GET IT WORKING WITH SWITCHING

//Francesco's code that is not working
// let percentageComplete = 52;
// switch (percentageComplete) {
//   case percentageComplete < 30:
//     console.log("long-way");
//     break;
//   case percentageComplete >= 30 && percentageComplete <= 50:
//     console.log("slowly getting");
//     break;
//   case percentageComplete >= 51 && percentageComplete <= 80:
//     console.log("you can do it");
//     break;
//   case percentageComplete >= 80 && percentageComplete <= 99:
//     console.log("last push");
//     break;
//   case percentageComplete === 100:
//     console.log("YAY");
//   default:
//     console.log("no known % specified");
//     break;
// }

//my workaround that works
let percentageComplete2 = 81;
switch (true) {
  case (percentageComplete2 < 30):
    console.log("long-way");
  break;
  case (percentageComplete2 < 50):
    console.log("slowly getting");
  break;
  case (percentageComplete2 < 80):
    console.log("you can do it");
  break;
  case (percentageComplete2 < 99):
    console.log("last push");
  break;
  case (percentageComplete2 = 100):
    console.log("YAY");
  break;
  default:
    console.log("no known % specified");
    break;
}