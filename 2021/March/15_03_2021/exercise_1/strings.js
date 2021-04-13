//string

let myName = ' Dalib or ';
console.log(typeof myName);
console.log(myName.length); //to see length of any string we will use *.length

let num = ['Dalibor',1,4,67,3];
console.log(num.length); //we can also use to find out how many items in array
console.log(num[0].length);


//string as an array
let lastName = 'Koenig';
console.log(lastName[0]);

//trim name.trim() removes white spaces after or before
console.log(myName.trim().length);

//change to lowercase
console.log(myName.toLowerCase());

//change to uppercase
console.log(myName.toUpperCase());

//subString .substr(start, length)
let course = 'javascript for backend';
console.log(course.substr(0,10));
//                       start, length 

console.log(course.substr(10));
//                       start

console.log(course.substr(-5));
//                     last letter -5

console.log(course.substr(-4, 2));
//                      start, length


let course2 = 'javascript for frontend'
// let courses = course + course2
// console.log(courses, courses.length);

// add string to a string
let courses = 'frontend ' + 'backend'
console.log(courses, courses.length);

// how to add javascript to a string
let myFavoriteCourses = course + 'javascript for frontend'

// backticks
myFavoriteCourses = `i like to learn ${course}`
console.log(myFavoriteCourses);

let job = 'backend'

if (job === 'frontend') {
  console.log(`your job needs ${course2}`);
}
else {
  console.log(`your job needs ${course}`);
}

let jobPosition = (job === 'frontend' ? `your job needs ${course2}` : `your job needs ${course}`)
//                        if                     than                            else 
console.log(jobPosition);

// includes
let languages = 'English, French, German, Spanish'
console.log(languages.includes('Arabic'));

console.log(languages.includes('english'));
//  it is case sensitive

console.log(languages.includes('English', 1));  //start searching from index 1 to the end-- false
console.log(languages.includes('English', 0));  //start searching from index 0 to the end-- true

if (languages.includes ('French')) {
  console.log('we can speak French');
}

let laptops = ['Lenovo', 'HP', 'Apple', 'Dell']

console.log(laptops.includes('HP '));

function lower(text) {
  console.log(text.toLowerCase());
}

lower('CSS')

let person = {
  name:'Max',
  address:'Berlin',
  job:'Frontend developer',
  info: function(){
    console.log(`my name is ${person.name} and i am living in ${person.address} and working as a ${person.job}`)
  }
}

console.log(person.name);
person.info()

console.log(person.name.toLowerCase()); 

let number = '555'
console.log(Number(number) + 9);  //convert number to number
console.log(parseInt(number) + 9); //convert number to number