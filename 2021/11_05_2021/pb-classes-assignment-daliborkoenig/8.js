/*

Assignment 8

+ Copy the answer from Assignment 7

+ Modify the interact method to do the following:
    - the interact method should check the type "value" and the "mood"
    value against the "animalBehaviour" object (see below) and return the
    corresponding value

    - Using that information, modify your console.log() with the following
    sentence (remove the old one):

    "It {behaviour} at you."

+ What happens if you run the method cat.interact() ?

+ Create new variables:
    - Instantiate the class into a new variable, "dog",
    give it a mood which is either "happy" or "angry"

    - Instantiate the class into a new variable, "horse",
    give it a mood which is either "happy" or "angry"

+ What happens if you run the method dog.interact() ?

+ What happens if you run the method horse.interact() ?

 */
class Animal{
    constructor(mood, type){
        this.mood = mood
        this.type = type
    }
    interact(){
        // console.log(Animal.name);
        // if(this.type.toLowerCase() == 'cat'){
        //     if(this.mood.toLowerCase() == 'happy'){
        //         console.log(`It ${animalBehaviour.cat.happy} at you.`);
        //     }
        //     else{
        //         console.log(`It ${animalBehaviour.cat.angry} at you.`);
        //     }
        // }
        // if(this.type.toLowerCase() == 'dog'){
        //     if(this.mood.toLowerCase() == 'happy'){
        //         console.log(`It ${animalBehaviour.cat.happy} at you.`);
        //     }
        //     else{
        //         console.log(`It ${animalBehaviour.cat.angry} at you.`);
        //     }
        // }
        // if(this.type.toLowerCase() == 'horse'){
        //     if(this.mood.toLowerCase() == 'happy'){
        //         console.log(`It ${animalBehaviour.cat.happy} at you.`);
        //     }
        //     else{
        //         console.log(`It ${animalBehaviour.cat.angry} at you.`);
        //     }
        // }
        for (let animal in animalBehaviour){
            if (this.type == animal){
                console.log(`It ${animalBehaviour[this.type][this.mood.toLowerCase()]} at you.`);
            }
        }
    }
}

const animalBehaviour = {
    dog: {
        angry: "barks",
        happy: "wags its tail"
    },
    cat: {
        angry: "scratches",
        happy: "meows"
    },
    horse: {
        angry: "charges",
        happy: "neighs"
    }
};


const cat = new Animal("Angry", "cat")
cat.interact()


const myFirstName = 'John'
// console.log(Object.keys({cat})[0])
