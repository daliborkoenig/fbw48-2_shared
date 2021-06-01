/*

Assignment 7

+ Copy the answer from Assignment 6

+ Create a new method on your class
    - the method will be called "interact"
    - the method will console.log() the
    "mood" (string) property into a sentence like so:

    "It is {mood}."

    Hint: You can use ES6 template literals here

    For a quick recap, see this link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

+ What happens if you run the method cat.interact() ?

 */
class Animal{
    constructor(mood, type){
        this.mood = mood
        this.type = type
    }
    interact(){
        console.log(`It is ${this.mood}`);
    }
}

const cat = new Animal("Angry", "cat")
cat.interact()