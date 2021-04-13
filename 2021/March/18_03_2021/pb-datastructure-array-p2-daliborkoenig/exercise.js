// 1
euroCities = ['Paris','London','Valletta','Prague','Rome']
console.log(euroCities);
myArr = [] 
myArr[1] = 'some value'
console.log(myArr);

// 2
euroCities.splice(0,1,'Berlin')
console.log(euroCities);

// 3
console.log(euroCities[4]);

// 4
euroCities.pop()
console.log(euroCities);

// 5
euroCities.unshift('Budapest')
console.log(euroCities);

// 6
euroCities.splice(1,2)
console.log(euroCities);

// 7
asianCities = ['Beijing','Tokyo','Hong Kong','Pyongyang','Kuala Lumpur']
console.log(asianCities);

// 8
asianCitiesCopy = asianCities.slice(1,4)
console.log(asianCitiesCopy);

// 9
worldCities = euroCities.concat(asianCities)
console.log(worldCities);

// 10
worldCities.reverse()
console.log(worldCities);

// 11
worldCities.splice(2,1,'Toronto')
console.log(worldCities);

// 12
worldCities.splice(1,0,'Washington')
console.log(worldCities);

// 13 
worldCities_2 = worldCities.join(' , ')
console.log(worldCities_2);
worldCities_2 = worldCities.join('+')
console.log(worldCities_2);

// BONUS
// 1
let str = 'Hello World'
str = str.split('')
str = str.reverse()
str = str.join('')
// str = str.split(' ')
console.log(str);

// 2
let siblings = ['Mimi','Sasa']
let parents = ['Nevenka','Miroslav']
family = parents.concat(siblings)
family.unshift('Ferdo')
family = family.reverse()
family[2] = 'Miro'
console.log(family[2]);


console.log(family);
