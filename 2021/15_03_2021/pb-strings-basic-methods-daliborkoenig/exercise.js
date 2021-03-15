// 1
let iCan = 'I can walk in the park all day!';
console.log(iCan.substring(6, 10));

// 2
let hello = 'Hello World';
console.log(hello.toUpperCase());

// 3
let hello2 = 'Hello Earthling';
console.log(hello2.toLowerCase());

// 4
let java = 'JavaScript'
console.log(java.substr(3, 3));

// 5
console.log('nice shoes'.includes('l') || 'nice shoes'.includes('n'));

// 6
let bananas = 'Bananas'
let bananas2 = bananas.substr(0,1) + bananas + bananas.substr(0,1)
console.log(`${bananas} ==> ${bananas2}`);

// 7
let scritch = 'Scritch'
let scritch2 = scritch.substr(-3) + scritch + scritch.substr(-3)
console.log(`${scritch} ==> ${scritch2}`);

// 8
let boogie = 'BoogieWoogie'
let boogie2 = boogie.substr(-1) + boogie.substr(1,10) + boogie.substr(0,1);
console.log(`${boogie} ==> ${boogie2}`);

// 9
let firstName = 'Dalibor'
let city = 'Frankfurt'
let course = 'Web Development'
console.log(`My name is ${firstName}, I live in ${city} and i am attending ${course} course.`);

// 10
fox = 'the quick brown fox'
console.log(fox[0].toUpperCase()+fox.substr(1));
