// 0
isDogBetter = 'true'
isCatBetter = 'false'

// 1a
console.log(isDogBetter && isCatBetter);
// 1b
console.log(isDogBetter || isCatBetter);
// 1c
console.log(!(isDogBetter && isCatBetter));

// 2
atoms = 5
sandGrains = 10
starsInSky = 20

// 3a
console.log((atoms > starsInSky) && (atoms > sandGrains));
// 3b
console.log(atoms !== sandGrains);
// 3c
console.log((starsInSky < sandGrains) || (starsInSky > atoms));
// 3d
console.log((atoms == starsInSky) || (atoms !== sandGrains));
// 3e
console.log((atoms >= 10) && (sandGrains <= 10));
// 3f
console.log(((atoms * starsInSky) < 100) || ((atoms * sandGrains)) > 100);

//BONUS 
a1 = 'simulation'
b1 = 'hologram'

a2 = 'computer'
b2 = 'robot'

console.log(`We live in a ${a1}, so it does not matter, stop testing me! >You ${b2}.`);