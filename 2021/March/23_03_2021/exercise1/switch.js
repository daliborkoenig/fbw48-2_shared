// check if the day is a workday or not
// let day = "fri";
// if (day === 'mon' || day === 'tue' || day === 'wed' || day === 'thu' || day === 'fri'){
//   console.log('today is a workday');
// }
// if (day === 'mon'){
//   console.log('today is a workday');
// }
// else if (day === 'tue'){
//   console.log('today is a workday');
// }
// else if (day === 'wed'){
//   console.log('today is a workday');
// }
// else if (day === 'thu'){
//   console.log('today is a workday');
// }
// else if (day === 'fri'){
//   console.log('today is a workday');
// }
// else if (day === 'sat'){
//   console.log('today is not a workday');
// }
// else if (day === 'sun'){
//   console.log('today is not a workday');
// }
// else {
//   console.log('something is wrong');
// }

// let day = "tue";
// switch (day) {
//   case "mon" || 'tue':
//     console.log("today is a workday");
//     break;
//   case "tue":
//     console.log("today is a workday");
//     break;
//   case "wed":
//     console.log("today is a workday");
//     break;
//   case "thu":
//     console.log("today is a workday");
//     break;
//   case "fri":
//     console.log("today is a workday");
//     break;
//   case "sat":
//     console.log('today is not a workday');
//     break;
//   case "sun":
//     console.log('today is not a workday');
//     break;
//   default:
//     console.log('something is wrong');
// }

let day = "tue";
switch (day) {
  case "mon":
  case "tue":
  case "wed":
  case "thu":
  case "fri":
    console.log("today is a workday");
    break;
  case "sat":
  case "sun":
    console.log('today is not a workday');
    break;
  default:
    console.log('something is wrong');
}



